"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import TooltipWrapper from "../components/Tooltip/TooltipWrapper";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">Heading</h1>
      <p>Paragraph</p>
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Dark
      </button>
      <button
        onClick={() => {
          setTheme("light");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Light
      </button>
      <button
        onClick={() => {
          setTheme("system");
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        System
      </button>

      <TooltipWrapper
        tooltipContent="World of Warcraft"
        side="bottom"
        sideOffset={20}
      >
        <div className="flex items-center gap-2 cursor-pointer text-x">
          <Image
            className="cursor-pointer"
            src="/logo2.svg"
            alt="Logo"
            width={62}
            height={62}
          />{" "}
          Test
        </div>
      </TooltipWrapper>
    </div>
  );
}
