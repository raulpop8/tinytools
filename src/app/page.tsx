import Card from "@/components/ui/Card";

const cards = [
    {
      title: "Tic-Tac-Toe",
      description: "classic tic-tac-toe",
      href: "/games/tic-tac-toe",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "Rock Paper Scissors",
      description: "play classic rock paper scissors",
      href: "/games/rock-paper-scissors",
      tag: "Fun",
      comingSoon: true,
    },

    ];

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight">Tiny Tools</h1>
        <p className="text-neutral-500 text-lg">useful tools and small games.</p>
      </header>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {cards.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      description={card.description}
      href={card.href}
      tag={card.tag}
      comingSoon={card.comingSoon} 
    />
  ))}
</section>


    </div>
  );
}