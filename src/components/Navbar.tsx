import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex items-end justify-end">
      <div className="flex items-center gap-2">
        <Image src="/icons/wow100x100.png" alt="Logo" width={20} height={20} />
        <h1 className="text-2xl font-bold">Ammar</h1>
      </div>
    </nav>
  );
}
