import Card from "@/components/ui/Card";

export default function GamesPage() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <div className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Games
        </h1>

        <p className="text-foreground/80 leading-relaxed">
          🎮 Small interactive games for fun, logic practice, and experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Idle Clicker"
          description="A fun game to practice clicking skills."
          comingSoon
          tag="Fun"
        />

        <Card
          title="Tic-Tac-Toe"
          description="Play classic tic-tac-toe against a friend."
          href="/games/tic-tac-toe"
          tag="Logic"
        />

        <Card
          title="Rock Paper Scissors"
          description="Challenge the computer in this classic game."
          comingSoon
        />

        <Card
          title="Memory Game"
          description="Test your memory with matching cards."
          comingSoon
        />

        <Card
          title="Trivia Quiz"
          description="Answer fun questions to test your knowledge."
          comingSoon
        />

        <Card
          title="Reaction Time Test"
          description="Test your reflexes with a quick reaction game."
          comingSoon
        />
      </div>
    </section>
  );
}
