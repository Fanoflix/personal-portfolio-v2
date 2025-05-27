import React from "react";

interface WrapConditionallyProps {
  condition: boolean;
  wrapper: (wrapperChildren: React.ReactNode) => React.ReactNode;
  children: React.ReactNode;
}

export function WrapConditionally({
  condition,
  wrapper,
  children,
}: WrapConditionallyProps) {
  if (condition) {
    return wrapper(children);
  }

  return <>{children}</>;
}
