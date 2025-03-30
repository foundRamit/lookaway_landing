'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, EyeOff, Sun, Moon } from 'lucide-react';

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  assets: { browser_download_url: string }[];
};

export default function Home() {
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch('https://api.github.com/repos/foundRamit/LookAwayApp/releases/latest');
        const data = await res.json();
        setLatestRelease(data);
      } catch (error) {
        console.error('Error fetching release:', error);
      }
    }
    fetchLatestRelease();
  }, []);

  return (
    <div className={`relative min-h-screen transition-all duration-500 ${darkMode ? 'bg-[#0a0f1f] text-white' : 'bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-900'}`}>
      {/* Background with Grid Lines */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Horizontal Lines */}
          {[...Array(10)].map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke={darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(100, 100, 255, 0.3)"} strokeWidth="0.5" />
          ))}
          {/* Vertical Lines */}
          {[...Array(10)].map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke={darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(100, 100, 255, 0.3)"} strokeWidth="0.5" />
          ))}
        </svg>
      </div>

      <nav className="w-full flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center space-x-3">
          <EyeOff className="w-8 h-8 text-blue-500" />
          <span className={`text-2xl font-bold ${darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent' : 'bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'}`}>
            Lookaway
          </span>
        </div>
        
        {/* Navigation Links & Theme Toggle */}
        <div className="flex items-center space-x-6">
          <a href="#download" className="text-lg font-semibold underline text-blue-400 hover:text-blue-500 transition">
            Download
          </a>
          <a href="#features" className="text-lg font-semibold underline text-blue-400 hover:text-blue-500 transition">
            Features
          </a>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <main className="flex flex-col items-center text-center space-y-10 p-6 relative z-10">
        {/* Updated Text Background for Visibility */}
        <div className={`p-6 rounded-xl shadow-lg max-w-3xl ${darkMode ? 'bg-black/50 text-white' : 'bg-white/90 text-gray-900 border border-gray-300 shadow-xl'}`}>
          <h1 className="text-5xl font-bold">
          Smart breaks for healthy eyes and a focused mind
          </h1>
          <p className="text-lg mt-4">
            Lookaway reminds you to take strategic breaks, reducing eye strain and keeping you focused.
          </p>
        </div>

        {/* Image Now Has a Proper Border to Separate from Text */}
        <div className="relative">
          <Image
            src="/lookaway-preview.png"
            alt="Lookaway App Interface"
            width={500}
            height={300}
            className="rounded-2xl shadow-2xl border-4 border-gray-600"
          />
        </div>

        {/* Release Information Now Stands Out */}
        {latestRelease && (
            <p className={`text-lg font-semibold p-2 rounded-lg shadow-md transition-all 
            ${darkMode ? 'text-green-400 bg-black/50' : 'text-green-700 bg-gray-200 border border-gray-400'}`}>
          🚀 New stable release {latestRelease.tag_name}
            </p>
        )}

        <div className="flex flex-col space-y-4">
          <Link
            id="download"
            href="#"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            <ArrowDownToLine className="w-5 h-5" />
            <span>Download Now</span>
          </Link>
          <Link
            id="features"
            href="#"
            className="border border-gray-600 px-6 py-3 rounded-full text-gray-900 bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
