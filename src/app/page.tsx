'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, EyeOff, Timer, Maximize2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] text-white font-sans overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 opacity-50 blur-[140px] pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <EyeOff className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Lookaway</span>
        </div>
        <div className="space-x-6">
          <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
          <Link href="#download" className="hover:text-blue-400 transition-colors">Download</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Protect Your Eyes, Boost Your Productivity
          </h1>
          <p className="text-xl text-gray-300 max-w-xl">
            Lookaway uses intelligent automation to remind you to take strategic breaks, reducing eye strain and helping you maintain focus.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              href="#download" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full text-white font-semibold flex items-center space-x-2 transition-transform hover:scale-105 shadow-lg"
            >
              <ArrowDownToLine className="w-5 h-5" />
              <span>Download Now</span>
            </Link>
            <Link 
              href="#features" 
              className="border border-gray-600 px-6 py-3 rounded-full text-gray-300 hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <Image 
            src="/lookaway-preview.png" 
            alt="Lookaway App Interface" 
            width={600} 
            height={400} 
            className="rounded-2xl shadow-2xl border border-gray-700 transform hover:scale-105 transition-transform"
          />
          <div className="absolute -top-10 -right-10 bg-blue-500/20 w-32 h-32 rounded-full blur-2xl"></div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Features That Care For Your Eyes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all group">
              <Timer className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Breaks</h3>
              <p className="text-gray-400">Automated reminders to rest your eyes at perfect intervals.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all group">
              <Maximize2 className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customizable</h3>
              <p className="text-gray-400">Personalize break schedules to match your work rhythm.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all group">
              <EyeOff className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eye Health</h3>
              <p className="text-gray-400">Designed by experts to minimize digital eye strain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
            Ready to Protect Your Vision?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Download Lookaway today and start your journey to healthier, more productive screen time.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/LookawayApp_Installer.exe"
              download
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center space-x-3 transition-transform hover:scale-105 shadow-xl"
            >
              <ArrowDownToLine className="w-6 h-6" />
              <span>Download for Windows</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">&copy; 2025 Lookaway. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
