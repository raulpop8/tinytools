import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Utility Hub
      </h1>

      <p className="text-foreground/80 leading-relaxed">
        A growing collection of useful tools and small games built to practice
        modern web development and problem-solving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="Tools"
          description="Productivity helpers, generators, and everyday utilities."
          href="/tools"
        />

        <Card
          title="Games"
          description="Small interactive games built for fun and logic practice."
          href="/games"
        />
      </div>
    </section>
  );
}
