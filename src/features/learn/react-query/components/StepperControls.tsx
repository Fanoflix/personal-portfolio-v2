import { Button } from "@/src/components/Button/button";
import { useStepper } from "@/src/components/Stepper/StepperContext";

interface StepperControlsProps {
  isLastQuestion?: boolean;
}

export function StepperControls({ isLastQuestion }: StepperControlsProps) {
  const { canGoNext, canGoPrevious, goNext, goPrevious } = useStepper();

  return (
    <div className="flex justify-between items-center mt-8">
      <Button
        variant="outline"
        onClick={goPrevious}
        disabled={!canGoPrevious}
        className="min-w-[120px]"
      >
        Previous
      </Button>

      <Button onClick={goNext} disabled={!canGoNext} className="min-w-[120px]">
        {isLastQuestion ? "Finish" : "Next"}
      </Button>
    </div>
  );
}
