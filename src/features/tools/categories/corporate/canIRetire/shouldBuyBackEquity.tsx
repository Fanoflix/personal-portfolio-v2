"use client";

import { Button } from "@/components/Button/button";
import { cn } from "@/lib/utils";

import { useShouldBuyBackEquity } from "./useShouldBuyBackEquity";

export function ShouldBuyBackEquity() {
  const { equityData, result, calculate, updateField, reset } =
    useShouldBuyBackEquity();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "buy":
        return "text-green-600 dark:text-green-400";
      case "hold":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-yellow-600 dark:text-yellow-400";
    }
  };

  return (
    <div className="max-w-site mx-auto w-full space-y-6">
      <div className="space-y-4">
        <h2 className="text-primary text-2xl font-bold">
          Should I Buy Back Equity?
        </h2>
        <p className="text-text">
          Enter your equity details to calculate if buying back equity makes
          financial sense.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="currentValue"
            className="text-foreground text-sm font-medium"
          >
            Current Equity Value
          </label>
          <input
            id="currentValue"
            type="number"
            value={equityData.currentEquityValue || ""}
            onChange={(e) =>
              updateField("currentEquityValue", Number(e.target.value))
            }
            className={cn(
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="$100,000"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="buybackPrice"
            className="text-foreground text-sm font-medium"
          >
            Buyback Price
          </label>
          <input
            id="buybackPrice"
            type="number"
            value={equityData.buybackPrice || ""}
            onChange={(e) =>
              updateField("buybackPrice", Number(e.target.value))
            }
            className={cn(
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="$80,000"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="growthRate"
            className="text-foreground text-sm font-medium"
          >
            Expected Annual Growth Rate (%)
          </label>
          <input
            id="growthRate"
            type="number"
            step="0.1"
            value={equityData.expectedGrowthRate || ""}
            onChange={(e) =>
              updateField("expectedGrowthRate", Number(e.target.value))
            }
            className={cn(
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="15"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="timeHorizon"
            className="text-foreground text-sm font-medium"
          >
            Time Horizon (years)
          </label>
          <input
            id="timeHorizon"
            type="number"
            min="1"
            value={equityData.timeHorizon || ""}
            onChange={(e) => updateField("timeHorizon", Number(e.target.value))}
            className={cn(
              "border-border w-full rounded-md border px-3 py-2",
              "bg-background text-foreground",
              "focus:ring-ring focus:border-transparent focus:ring-2 focus:outline-hidden",
            )}
            placeholder="3"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={calculate} className="flex-1">
          Calculate
        </Button>
        <Button onClick={reset} variant="outline">
          Reset
        </Button>
      </div>

      {result && (
        <div className="border-border bg-card mt-6 rounded-lg border p-6">
          <h3 className="text-card-foreground mb-4 text-lg font-semibold">
            Analysis Results
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Future Equity Value:
              </span>
              <span className="text-foreground font-medium">
                {formatCurrency(result.futureEquityValue)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Cost of Buyback:</span>
              <span className="text-foreground font-medium">
                {formatCurrency(result.costOfBuyback)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Net Benefit:</span>
              <span
                className={cn(
                  "font-medium",
                  result.netBenefit >= 0
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400",
                )}
              >
                {formatCurrency(result.netBenefit)}
              </span>
            </div>

            <hr className="border-border" />

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Recommendation:</span>
              <div className="text-right">
                <div
                  className={cn(
                    "font-semibold capitalize",
                    getRecommendationColor(result.recommendation),
                  )}
                >
                  {result.recommendation === "buy"
                    ? "Buy Back"
                    : result.recommendation === "hold"
                      ? "Keep Equity"
                      : "Neutral"}
                </div>
                <div className="text-muted-foreground text-sm">
                  {result.confidenceLevel}% confidence
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
