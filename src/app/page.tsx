import Link from "next/link";

const tools = [
  { name: "Random Number", href: "/tools/random-number" },
  { name: "Password Generator", href: "/tools/password-generator" },
  { name: "Date Difference", href: "/tools/date-difference" },
  { name: "Unit Converter", href: "/tools/unit-converter" },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Tiny Tools</h1>
        <p className="text-neutral-500 text-lg">Small tools. No nonsense.</p>
      </header>

      <ul className="space-y-3">
        {tools.map((tool) => (
          <li key={tool.href}>
            <Link
              href={tool.href}
              className="text-xl underline-offset-4 hover:underline transition-opacity hover:opacity-70"
            >
              {tool.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}