'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, EyeOff, Timer, Maximize2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50 blur-[140px] pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <EyeOff className="w-8 h-8 text-white" />
          <span className="text-xl font-bold text-white">Lookaway</span>
        </div>
        <div className="space-x-6">
          <Link href="#features" className="hover:text-gray-400 transition-colors">Features</Link>
          <Link href="#download" className="hover:text-gray-400 transition-colors">Download</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 py-20 grid md:grid-cols-2 gap-24 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Protect Your Eyes, Boost Your Productivity
          </h1>
          <p className="text-xl text-gray-300 max-w-xl">
            Lookaway uses intelligent automation to remind you to take strategic breaks, reducing eye strain and helping you maintain focus.
          </p>
          
          <div className="flex space-x-4 mt-10">
            <Link 
              href="#download" 
              className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transition-transform hover:scale-105 shadow-lg hover:bg-gray-200"
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
        
        <div className="relative ml-8">
          <Image 
            src="/lookaway-preview.png" 
            alt="Lookaway App Interface" 
            width={400} 
            height={200} 
            className="rounded-2xl shadow-2xl border border-gray-800 transform hover:scale-105 transition-transform"
          />
          <div className="absolute -top-10 -right-10 bg-gray-800/20 w-32 h-32 rounded-full blur-2xl"></div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Features That Care For Your Eyes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-white transition-all group">
              <Timer className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Breaks</h3>
              <p className="text-gray-400">Automated reminders to rest your eyes at perfect intervals.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-white transition-all group">
              <Maximize2 className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customizable</h3>
              <p className="text-gray-400">Personalize break schedules to match your work rhythm.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-white transition-all group">
              <EyeOff className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eye Health</h3>
              <p className="text-gray-400">Designed by experts to minimize digital eye strain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Protect Your Vision?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Download Lookaway today and start your journey to healthier, more productive screen time.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/LookawayApp_Installer.exe"
              download
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 transition-transform hover:scale-105 shadow-xl hover:bg-gray-200"
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