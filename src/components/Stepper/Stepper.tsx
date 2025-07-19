import { ReactNode } from "react";
import { StepperProvider } from "./StepperContext";

interface StepperProps {
  children: ReactNode;
  totalSteps: number;
  initialStep?: number;
}

export function Stepper({ children, totalSteps, initialStep }: StepperProps) {
  return (
    <StepperProvider totalSteps={totalSteps} initialStep={initialStep}>
      {children}
    </StepperProvider>
  );
}
