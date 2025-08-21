import { Button } from "@/src/components/Button/button";
import { useStepper } from "@/src/components/Stepper/StepperContext";
import { useMCQ } from "../hooks";

interface StepperControlsProps {
  isLastQuestion?: boolean;
}

export function StepperControls({ isLastQuestion }: StepperControlsProps) {
  const { isAnswered } = useMCQ();
  const { canGoNext, canGoPrevious, goNext, goPrevious } = useStepper();

  return (
    <div className="flex justify-between items-center w-full max-w-xs md:max-w-[500px]">
      <Button
        className="w-max  border-0"
        variant="outline"
        onClick={goPrevious}
        disabled={!canGoPrevious}
      >
        Previous
      </Button>

      <Button
        className="w-max  border-0"
        onClick={goNext}
        disabled={!canGoNext || !isAnswered}
      >
        {isLastQuestion ? "Finish" : "Next"}
      </Button>
    </div>
  );
}
