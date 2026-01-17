export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto p-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Utility Hub. Built with Next.js.
      </div>
    </footer>
  );
}
