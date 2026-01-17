import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">
          Utility Hub
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/tools" className="hover:underline">
            Tools
          </Link>
          <Link href="/games" className="hover:underline">
            Games
          </Link>
        </div>
      </nav>
    </header>
  );
}
