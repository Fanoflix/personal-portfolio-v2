import { cn } from "@/lib/utils";

export const variantClasses = {
  default: "bg-primary",
  gradient: "bg-linear-to-b from-transparent via-primary/60 to-transparent",
};

export const VerticalDivider = ({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: keyof typeof variantClasses;
}) => (
  <div
    className={cn(
      "h-full min-h-[1rem] w-0.25",
      variantClasses[variant],
      className,
    )}
    data-testid="vertical-divider"
  />
);
