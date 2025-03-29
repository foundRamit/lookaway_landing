'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownToLine, EyeOff } from 'lucide-react';

type GitHubRelease = {
  tag_name: string;
  html_url: string;
  assets: { browser_download_url: string }[];
};

export default function Home() {
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null);

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
    <div className="relative min-h-screen bg-black font-sans overflow-hidden">
      <header className="absolute top-0 left-0 w-full p-4 text-center z-30">
        <pre className="text-white font-mono text-sm tracking-tight"></pre>
      </header>

      <div className="relative z-20">
        <nav className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <EyeOff className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Lookaway
            </span>
          </div>
          <div className="space-x-6">
            <Link href="#features" className="hover:text-blue-400 transition-colors">
              Features
            </Link>
            <Link href="#download" className="hover:text-blue-400 transition-colors">
              Download
            </Link>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Protect Your Eyes, Boost Your Productivity
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Lookaway uses intelligent automation to remind you to take strategic breaks, reducing eye strain and keeping you focused.
            </p>
            {latestRelease && (
              <p className="text-lg font-semibold text-green-400">
                🚀 New stable release {latestRelease.tag_name}
              </p>
            )}
            <div className="flex space-x-4">
              <Link
                href="#download"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold text-white flex items-center space-x-2 transition-transform hover:scale-105 shadow-lg"
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
              width={500}
              height={300}
              className="rounded-2xl shadow-2xl border border-gray-700 transform hover:scale-105 transition-transform"
            />
            <div className="absolute -top-10 -right-10 bg-blue-500/20 w-32 h-32 rounded-full blur-2xl"></div>
          </div>
        </main>
      </div>
    </div>
  );
}
