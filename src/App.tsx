/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture at Dusk"
          className="h-full w-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex w-full items-start justify-between px-8 pt-0">
        <div className="flex h-16 items-center">
          <span className="text-xl font-bold tracking-tighter">DNOIN.INC</span>
        </div>

        {/* Curved Nav Container */}
        <div className="hidden md:flex bg-white text-black px-12 py-4 rounded-b-[40px] shadow-lg gap-8 items-center">
          <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Projects</a>
          <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">About us</a>
          <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Blog</a>
          <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Contact</a>
        </div>

        <div className="flex h-16 items-center">
          <button className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white pl-6 pr-2 py-2 rounded-full transition-all">
            <span className="text-sm font-medium">Get started</span>
            <div className="bg-white text-black rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
              <ChevronRight size={16} />
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 container mx-auto px-8 pt-32 pb-20 flex flex-col h-[calc(100vh-64px)] justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <p className="text-sm md:text-base leading-relaxed text-white/80 font-light">
              According to Vitruvius, the architect should strive to fulfill
              each of these three attributes as well as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
              Building<br />
              <span className="font-serif italic font-normal">Beyond</span>
            </h1>
            
            <button className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white pl-8 pr-2 py-3 rounded-full transition-all">
              <span className="text-base font-medium">Contact us</span>
              <div className="bg-white text-black rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ChevronRight size={20} />
              </div>
            </button>
          </motion.div>

          {/* Right Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:text-right max-w-xs md:ml-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Architecture<br />can mean</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              A general term to describe buildings and other physical structures.
            </p>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </main>
    </div>
  );
}
