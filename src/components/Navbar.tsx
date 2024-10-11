"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <nav className="flex items-end justify-end">
      <div className="flex items-center gap-2">
        <Image src="/icons/wow100x100.png" alt="Logo" width={20} height={20} />
        <h1 className="text-2xl font-bold">Ammar</h1>
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
    </nav>
  );
}
