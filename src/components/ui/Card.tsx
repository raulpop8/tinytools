import Link from "next/link";
import { TAGS } from "@/lib/tags";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean; // status
  tag?: string; // tag
};

export default function Card({ title, description, href, comingSoon = false, tag }: CardProps) {
  const displayTag = comingSoon ? "Coming Soon" : tag;

  const tagInfo = displayTag ? TAGS[displayTag] : null;

  const content = (
    <div
      className={`
        rounded-xl border border-border bg-surface p-6 min-h-[150px]
        transition-transform
        ${comingSoon
          ? "opacity-60 cursor-not-allowed"
          : "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"}
          
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>

        {tagInfo && (
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${tagInfo.colorClass}`}>
            {tagInfo.label}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );

  if (!href || comingSoon) return content;
  return <Link href={href}>{content}</Link>;
}
