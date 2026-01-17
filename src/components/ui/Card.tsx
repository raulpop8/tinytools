import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
};

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="block border rounded-lg p-6 hover:shadow-md transition"
    >
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}
