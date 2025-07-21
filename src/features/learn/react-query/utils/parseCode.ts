import React from "react";

export function parseCode(text: string): React.ReactNode[] {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      // Remove the backticks and create a code element
      const codeContent = part.slice(1, -1);
      return React.createElement(
        "code",
        {
          key: index,
          className:
            "rounded-md bg-muted font-thin font-mono text-[12px] px-1 py-0.5",
        },
        codeContent,
      );
    }
    return part;
  });
}
