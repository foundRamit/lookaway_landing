'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, EyeOff, Timer, Maximize2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50 blur-[140px] pointer-events-none"></div>
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <EyeOff className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            <span className="text-lg sm:text-xl font-bold text-white">Lookaway</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-gray-400 transition-colors">Features</Link>
            <Link href="#download" className="hover:text-gray-400 transition-colors">Download</Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md p-1"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute inset-x-0 top-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen py-4 opacity-100 shadow-xl' : 'max-h-0 py-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-2">
            <Link 
              href="#features" 
              className="w-full text-center py-2 hover:bg-gray-800 transition-colors" 
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              href="#download" 
              className="w-full text-center py-2 hover:bg-gray-800 transition-colors" 
              onClick={toggleMenu}
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Protect Your Eyes, Boost Your Productivity
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
            Lookaway uses intelligent automation to remind you to take strategic breaks, reducing eye strain and helping you maintain focus.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
            <Link 
              href="#download" 
              className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-transform hover:scale-105 shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <ArrowDownToLine className="w-5 h-5" aria-hidden="true" />
              <span>Download Now</span>
            </Link>
            <Link 
              href="#features" 
              className="border border-gray-600 px-6 py-3 rounded-full text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="relative mx-auto md:ml-30 md:pl-8 max-w-xs sm:max-w-sm md:max-w-none">
          <Image 
            src="/lookaway-preview.png" 
            alt="Lookaway App Interface" 
            width={400}
            height={200}
            className="rounded-2xl shadow-2xl border border-gray-800 transform hover:scale-105 transition-transform w-full h-auto"
            priority
          />
          <div className="absolute -top-10 -right-10 bg-gray-800/20 w-32 h-32 rounded-full blur-2xl"></div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-white">
            Features That Care For Your Eyes
          </h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-white transition-all group h-full">
              <Timer className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Smart Breaks</h3>
              <p className="text-gray-400">Automated reminders to rest your eyes at perfect intervals.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-white transition-all group h-full">
              <Maximize2 className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Customizable</h3>
              <p className="text-gray-400">Personalize break schedules to match your work rhythm.</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-white transition-all group h-full sm:col-span-2 md:col-span-1">
              <EyeOff className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-3">Eye Health</h3>
              <p className="text-gray-400">Designed by experts to minimize digital eye strain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Protect Your Vision?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Download Lookaway today and start your journey to healthier, more productive screen time.
          </p>
          
          <div className="flex justify-center">
            <Link 
              href="/LookawayApp_Installer.exe"
              download
              className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-3 transition-transform hover:scale-105 shadow-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <ArrowDownToLine className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              <span>Download for Windows</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-6 sm:py-8 text-center border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-gray-400">&copy; 2025 Lookaway. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}