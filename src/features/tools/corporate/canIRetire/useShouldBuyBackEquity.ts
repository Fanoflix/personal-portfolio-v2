"use client";

import { useState } from "react";

interface EquityData {
  currentEquityValue: number;
  buybackPrice: number;
  expectedGrowthRate: number;
  timeHorizon: number;
}

interface CalculationResult {
  futureEquityValue: number;
  costOfBuyback: number;
  netBenefit: number;
  recommendation: "buy" | "hold" | "neutral";
  confidenceLevel: number;
}

export function useShouldBuyBackEquity() {
  const [equityData, setEquityData] = useState<EquityData>({
    currentEquityValue: 0,
    buybackPrice: 0,
    expectedGrowthRate: 0,
    timeHorizon: 1,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = () => {
    const {
      currentEquityValue,
      buybackPrice,
      expectedGrowthRate,
      timeHorizon,
    } = equityData;

    // Calculate future value with compound growth
    const futureEquityValue =
      currentEquityValue * Math.pow(1 + expectedGrowthRate / 100, timeHorizon);

    // Cost of buyback (what you pay now)
    const costOfBuyback = buybackPrice;

    // Net benefit (future value minus cost)
    const netBenefit = futureEquityValue - costOfBuyback;

    // Simple recommendation logic
    let recommendation: "buy" | "hold" | "neutral" = "neutral";
    let confidenceLevel = 50;

    if (netBenefit > buybackPrice * 0.2) {
      recommendation = "buy";
      confidenceLevel = 85;
    } else if (netBenefit < 0) {
      recommendation = "hold";
      confidenceLevel = 75;
    } else {
      recommendation = "neutral";
      confidenceLevel = 60;
    }

    const calculationResult: CalculationResult = {
      futureEquityValue,
      costOfBuyback,
      netBenefit,
      recommendation,
      confidenceLevel,
    };

    setResult(calculationResult);
  };

  const updateField = <K extends keyof EquityData>(
    field: K,
    value: EquityData[K],
  ) => {
    setEquityData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const reset = () => {
    setEquityData({
      currentEquityValue: 0,
      buybackPrice: 0,
      expectedGrowthRate: 0,
      timeHorizon: 1,
    });
    setResult(null);
  };

  return {
    equityData,
    result,
    calculate,
    updateField,
    reset,
  };
}
