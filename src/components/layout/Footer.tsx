import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-5 text-center space-y-5">
      <div className="flex justify-center gap-6">
        <a href="https://github.com/raulpop8" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-neutral-300 flex items-center gap-2 hover:bg-gray-100 transition"><Image src="/github.svg" alt="GitHub" width={20} height={20} />GitHub</a>
        <a href="https://ko-fi.com/raulpop" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-neutral-300 flex items-center gap-2 hover:bg-purple-100 transition"><Image src="/kofi.svg" alt="Ko-Fi" width={20} height={20} />Buy me a coffee</a>
      </div>

      <div className="max-w-6xl mx-auto p-5 text-sm text-gray-500 text-center">
        Design and Code by Raul Pop 💜 {new Date().getFullYear()}
      </div>
      
    </footer>
  );
}
