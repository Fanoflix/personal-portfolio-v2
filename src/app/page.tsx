"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
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
    </div>
  );
}
