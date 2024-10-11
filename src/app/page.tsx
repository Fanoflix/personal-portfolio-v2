"use client";
import MyLogo from "../components/MyLogo/MyLogo";
import TooltipWrapper from "../components/Tooltip/TooltipWrapper";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 items-center justify-center">
      <h1 className="text-4xl font-bold">Heading</h1>
      <p>Paragraph</p>

      <TooltipWrapper
        tooltipContent="World of Warcraft"
        side="bottom"
        sideOffset={20}
      >
        <div className="flex items-center gap-2 cursor-pointer text-x bg-gray-700 p-2">
          Hover me
        </div>
      </TooltipWrapper>

      <div className="flex gap-2 items-center justify-center"></div>

      <div>
        <MyLogo />
      </div>
    </div>
  );
}
