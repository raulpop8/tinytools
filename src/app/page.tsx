import Card from "@/components/ui/Card";

const cards = [
    {
      title: "Password Generator",
      description: "insanely secure password",
      href: "/tools/password-generator",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "Date Difference",
      description: "time between two dates",
      href: "/tools/date-difference",
      tag: "Calculator",
      comingSoon: true,
    },

    {
      title: "Random Words",
      description: "random words for fun",
      href: "/tools/random-words",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "Philosophical Question",
      description: "???",
      href: "/tools/",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "What should I eat today?",
      description: "random meal ideas.",
      href: "/tools/",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "What should I do today?",
      description: "random activities.",
      href: "/tools/",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "What should I wear today?",
      description: "random outfit ideas.",
      href: "/tools/",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "10-minute challenge",
      description: "random mini-tasks to get things done.",
      href: "/tools/",
      tag: "Generator",
      comingSoon: true,
    },

    {
      title: "Idle Clicker",
      description: "practice clicking skills",
      href: "/games/",
      tag: "Fun",
      comingSoon: true,
    },

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
    <div className="space-y-20">
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