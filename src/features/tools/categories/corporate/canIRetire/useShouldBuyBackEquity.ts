"use client";

import { useMemo, useState } from "react";

interface EquityInputs {
  valuationUsd: number;
  allocatedEquityPercent: number; // user types 0.1 to mean 0.1%
  tenureMonths: number;
}

interface EquityDerived {
  vestingMonths: number;
  vestedEquityPercent: number; // same unit as allocatedEquityPercent
  cashoutUsd: number;
  hasCliffBlockingCashout: boolean;
}

const DEFAULT_VALUATION_USD = 25_000_000;
const DEFAULT_ALLOCATED_EQUITY_PERCENT = 0.1; // 0.1%
const DEFAULT_TENURE_MONTHS = 24;
const VESTING_MONTHS = 48; // 4 years
const CLIFF_MONTHS = 12; // cashout blocked for first year

function computeVestedEquityPercent(
  allocatedEquityPercent: number,
  tenureMonths: number,
  vestingMonths: number,
): number {
  const effectiveMonths = Math.max(0, Math.min(tenureMonths, vestingMonths));
  const vestedRatio = effectiveMonths / vestingMonths;
  return allocatedEquityPercent * vestedRatio;
}

function computeCashoutUsd(
  valuationUsd: number,
  vestedEquityPercent: number,
  tenureMonths: number,
): number {
  if (tenureMonths <= CLIFF_MONTHS) {
    return 0;
  }
  const vestedFraction = vestedEquityPercent / 100; // convert percent to fraction
  return valuationUsd * vestedFraction;
}

export function useShouldBuyBackEquity(): {
  inputs: EquityInputs;
  derived: EquityDerived;
  updateField: <K extends keyof EquityInputs>(
    field: K,
    value: EquityInputs[K],
  ) => void;
  reset: () => void;
} {
  const [inputs, setInputs] = useState<EquityInputs>({
    valuationUsd: DEFAULT_VALUATION_USD,
    allocatedEquityPercent: DEFAULT_ALLOCATED_EQUITY_PERCENT,
    tenureMonths: DEFAULT_TENURE_MONTHS,
  });

  const derived = useMemo<EquityDerived>(() => {
    const vestedEquityPercent = computeVestedEquityPercent(
      inputs.allocatedEquityPercent,
      inputs.tenureMonths,
      VESTING_MONTHS,
    );
    return {
      vestingMonths: VESTING_MONTHS,
      vestedEquityPercent,
      cashoutUsd: computeCashoutUsd(
        inputs.valuationUsd,
        vestedEquityPercent,
        inputs.tenureMonths,
      ),
      hasCliffBlockingCashout: inputs.tenureMonths <= CLIFF_MONTHS,
    };
  }, [inputs]);

  const updateField = <K extends keyof EquityInputs>(
    field: K,
    value: EquityInputs[K],
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const reset = () => {
    setInputs({
      valuationUsd: DEFAULT_VALUATION_USD,
      allocatedEquityPercent: DEFAULT_ALLOCATED_EQUITY_PERCENT,
      tenureMonths: DEFAULT_TENURE_MONTHS,
    });
  };

  return { inputs, derived, updateField, reset };
}
