"use client";

import { Motes } from "@lucasmarkes/motes-react";

export default function SmokeBottom() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] translate-y-1/3 opacity-30 invert dark:invert-0"
      style={{ zIndex: -10 }}
    >
      <Motes
        effect="corona"
        pointer={false}
        radius={0.5}
        force={1}
        speed={0.4}
        contrast={1.1}
        brightness={0.1}
        trail={0.07}
        charset={` \`.-#`}
        background="transparent"
        ink="#adadad"
        accent="#d6d6d6"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
