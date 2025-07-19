"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface StepperContextType {
  currentStep: number;
  totalSteps: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  goNext: () => void;
  goPrevious: () => void;
  goToStep: (step: number) => void;
  resetToStart: () => void;
}

const StepperContext = createContext<StepperContextType | undefined>(undefined);

interface StepperProviderProps {
  children: ReactNode;
  totalSteps: number;
  initialStep?: number;
}

export function StepperProvider({
  children,
  totalSteps,
  initialStep = 0,
}: StepperProviderProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const canGoNext = currentStep < totalSteps - 1;
  const canGoPrevious = currentStep > 0;

  const goNext = () => {
    if (canGoNext) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goPrevious = () => {
    if (canGoPrevious) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  const resetToStart = () => {
    setCurrentStep(0);
  };

  const value: StepperContextType = {
    currentStep,
    totalSteps,
    canGoNext,
    canGoPrevious,
    goNext,
    goPrevious,
    goToStep,
    resetToStart,
  };

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
}
