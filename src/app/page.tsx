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
      title: "Clock",
      description: "a digital clock with time and date",
      href: "/tools/clock",
      tag: "Utility",
      comingSoon: false,
    },

    {
      title: "Rock Paper Scissors",
      description: "play classic rock paper scissors",
      href: "/games/rock-paper-scissors",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "Temporary Notepad",
      description: "a temporary notepad for quick notes",
      href: "/tools/temporary-notepad",
      tag: "Utility",
      comingSoon: false,
    },

    {
      title: "Password Generator",
      description: "insanely secure password",
      href: "/tools/password-generator",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "Date Difference",
      description: "time between two dates",
      href: "/tools/date-difference",
      tag: "Utility",
      comingSoon: false,
    },

    {
      title: "Random Words",
      description: "random words for fun",
      href: "/tools/random-words",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "Philosophical Questions",
      description: "thought-provoking questions",
      href: "/tools/philosophical-questions",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "What should I eat today?",
      description: "random meal ideas.",
      href: "/tools/what-should-i-eat-today",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "What should I do today?",
      description: "random activities.",
      href: "/tools/what-should-i-do-today",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "What should I wear today?",
      description: "random outfit ideas.",
      href: "/tools/what-should-i-wear-today",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "10-minute challenge",
      description: "random mini-tasks to get things done.",
      href: "/tools/10-minute-challenge",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "Idle Clicker",
      description: "practice clicking skills",
      href: "/games/idle-clicker",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "Story Prompt Generator",
      description: "random writing prompts",
      href: "/tools/story-prompt-generator",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "Random Recipe Generator",
      description: "random meal ideas",
      href: "/tools/random-recipe-generator",
      tag: "Generator",
      comingSoon: false,
    },

    {
      title: "Pomodoro Timer",
      description: "focus timer with breaks",
      href: "/tools/pomodoro-timer",
      tag: "Utility",
      comingSoon: false,
    },

    {
      title: "Calculator",
      description: "basic arithmetic calculator",
      href: "/tools/calculator",
      tag: "Utility",
      comingSoon: false,
    },

    {
      title: "Number Guessing Game",
      description: "guess the number game",
      href: "/games/number-guessing-game",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "Coin Flip",
      description: "flip a virtual coin",
      href: "/games/coin-flip",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "Dice Roller",
      description: "roll a virtual die",
      href: "/games/dice-roller",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "Hangman",
      description: "classic word guessing game",
      href: "/games/hangman",
      tag: "Fun",
      comingSoon: false,
    },

    {
      title: "What to watch today?",
      description: "random movie/TV recommendations",
      href: "/tools/what-to-watch-today",
      tag: "Generator",
      comingSoon: false,
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