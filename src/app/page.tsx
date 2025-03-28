'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-900 opacity-50 blur-[140px]"></div>
      
      {/* Hero Section */}
      <header className="relative z-10 text-center flex flex-col items-center space-y-6 mt-12 animate-fade-in">
        <h1 className="text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-glow">
          Lookaway App
        </h1>
        <p className="text-2xl text-gray-300 max-w-3xl text-center leading-relaxed animate-slide-in">
          Take smart breaks and protect your eyes with cutting-edge automation.
        </p>
      </header>
      
      {/* App Preview Section */}
      <div className="relative z-10 mt-20 flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl animate-fade-up">
        <Image
          src="/lookaway-preview.png"
          alt="Lookaway App Preview"
          width={500}
          height={300}
          className="rounded-2xl shadow-2xl border border-gray-700 transition-transform duration-500 hover:scale-110 hover:shadow-blue-500/50"
        />
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-gray-700 shadow-xl p-8 text-gray-300 max-w-lg animate-pop-up">
          <h2 className="text-4xl font-semibold text-blue-400 mb-6">Why Lookaway?</h2>
          <ul className="space-y-5 text-lg">
            <li className="flex items-center gap-3"><span className="text-blue-400 text-3xl">✔</span> Smart screen break reminders</li>
            <li className="flex items-center gap-3"><span className="text-blue-400 text-3xl">✔</span> Customizable countdown timer</li>
            <li className="flex items-center gap-3"><span className="text-blue-400 text-3xl">✔</span> Sleek, distraction-free UI</li>
            <li className="flex items-center gap-3"><span className="text-blue-400 text-3xl">✔</span> Boosts productivity & reduces eye strain</li>
          </ul>
        </div>
      </div>
      
      {/* Download Section */}
      <div className="relative z-10 mt-20 flex flex-col items-center space-y-6 animate-bounce-in">
        <Link
          href="/LookawayApp_Installer.exe"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-4 px-12 rounded-full text-lg shadow-xl transition-all transform hover:scale-110 hover:shadow-blue-500/50 border border-blue-400"
          download
        >
          🚀 Download Now
        </Link>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 text-gray-400 text-sm border-t border-gray-700 w-full text-center py-8 relative z-10 animate-fade-in">
        <p>&copy; 2025 Lookaway App. All rights reserved.</p>
      </footer>
    </div>
  );
}