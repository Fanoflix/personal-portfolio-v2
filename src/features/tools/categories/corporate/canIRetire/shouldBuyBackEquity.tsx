"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button/button";
import { cn } from "@/lib/utils";

import { useShouldBuyBackEquity } from "./useShouldBuyBackEquity";

export function ShouldBuyBackEquity() {
  const { inputs, derived, updateField, reset } = useShouldBuyBackEquity();
  const [valuationText, setValuationText] = useState<string>("");

  const formatPercent = (value: number) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5,
    }).format(value);

  const formatNumberWithCommas = (value: number) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    }).format(Number.isFinite(value) ? value : 0);

  useEffect(() => {
    setValuationText(formatNumberWithCommas(inputs.valuationUsd));
  }, [inputs.valuationUsd]);

  function clampTenure(months: number) {
    if (Number.isNaN(months)) {
      return 0;
    }
    if (months < 0) {
      return 0;
    }
    return months; // vesting calculation will cap at 48
  }

  return (
    <div className="max-w-site w-full space-y-4 p-0.5">
      <div className="space-y-4">
        <h3 className="text-primary font-black">
          <p className="text-primary/25 text-start leading-[0.95]">
            <span className="text-primary">Equity </span>
            Cash out calculator.
          </p>
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1 space-x-5">
          <label htmlFor="valuation" className="text-text text-sm font-medium">
            Estimated Company Valuation ($)
          </label>
          <input
            id="valuation"
            type="text"
            inputMode="numeric"
            pattern="\\d*"
            value={`$${valuationText}`}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, "");
              const numeric = raw === "" ? 0 : Number(raw);
              setValuationText(formatNumberWithCommas(numeric));
              updateField("valuationUsd", numeric);
            }}
            className={cn(
              "text-sm",
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="$25,000,000"
          />
        </div>

        <div className="space-y-1 space-x-5">
          <label htmlFor="equity" className="text-text text-sm font-medium">
            Allocated Equity (%)
          </label>
          <input
            id="equity"
            type="number"
            step="0.01"
            min="0"
            value={inputs.allocatedEquityPercent}
            onChange={(e) =>
              updateField("allocatedEquityPercent", Number(e.target.value))
            }
            className={cn(
              "text-sm",
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="0.1"
          />
        </div>

        <div className="space-y-1 space-x-5">
          <label htmlFor="tenure" className="text-text text-sm font-medium">
            Employment Tenure (months)
          </label>
          <input
            id="tenure"
            type="number"
            min="1"
            step="1"
            value={inputs.tenureMonths}
            onChange={(e) =>
              updateField("tenureMonths", clampTenure(Number(e.target.value)))
            }
            className={cn(
              "text-sm",
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="24"
          />
        </div>

        <div className="space-y-1 space-x-5">
          <label className="text-text text-sm font-medium">
            Vesting Period
          </label>
          <input
            aria-label="Vesting Period"
            readOnly
            value={`4 years (${derived.vestingMonths} months)`}
            className={cn(
              "text-sm",
              "border-border w-full rounded-md border px-3 py-2",
              "bg-muted text-muted-foreground",
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1 space-x-5">
          <label className="text-text text-sm font-medium">
            Vested Equity (%)
          </label>
          <input
            aria-label="Vested Equity"
            readOnly
            value={formatPercent(derived.vestedEquityPercent)}
            className={cn(
              "text-sm",
              "border-border w-full rounded-md border px-3 py-2",
              "bg-muted text-muted-foreground",
            )}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>

      <div className="border-border bg-accent/15 mt-6 rounded-lg border p-6">
        <div className="flex items-baseline justify-between">
          <span className="text-muted-foreground">Cashout</span>
          <span className="text-foreground text-3xl font-semibold">
            <NumberFlow
              willChange
              value={derived.cashoutUsd}
              format={{
                roundingIncrement: 100,
                roundingMode: "expand",
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              trend={0}
              transformTiming={{
                duration: 500,
                easing:
                  "linear(0, 0.0034 0.81%, 0.0284, 0.0731, 0.1323 5.65%, 0.6245 16.13%, 0.8101 20.97%, 0.8821, 0.94, 0.9848 28.23%, 1.0263 31.45%, 1.0403 33.06%, 1.0543, 1.0615, 1.0633, 1.0612, 1.0564 45.16%, 1.015 59.68%, 1.0071, 1.0016 67.74%, 0.9977 72.58%, 0.9961 78.22%, 0.9991 100%)",
              }}
              spinTiming={{
                duration: 400,
                easing:
                  "linear(0, 0.0034 0.81%, 0.0284, 0.0731, 0.1323 5.65%, 0.6245 16.13%, 0.8101 20.97%, 0.8821, 0.94, 0.9848 28.23%, 1.0263 31.45%, 1.0403 33.06%, 1.0543, 1.0615, 1.0633, 1.0612, 1.0564 45.16%, 1.015 59.68%, 1.0071, 1.0016 67.74%, 0.9977 72.58%, 0.9961 78.22%, 0.9991 100%)",
              }}
            />
          </span>
        </div>
        {derived.hasCliffBlockingCashout && (
          <p className="text-muted-foreground pt-3 text-sm">
            No cash out because the 1-year cliff hasn’t ended yet.
          </p>
        )}
      </div>
    </div>
  );
}
