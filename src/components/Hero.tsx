import React from 'react';
import { Avatar } from './Avatar';
import { Mail, ArrowRight } from 'lucide-react';
import { useToast } from './Toast';

export const Hero: React.FC = () => {
  const { showToast } = useToast();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('shaikhadnan862@gmail.com');
    showToast('Email copied to clipboard!');
  };

  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden bg-brand-bg">
      {/* Soft background decor */}
      <div className="absolute top-0 right-0 w-[40%] aspect-square bg-brand-red-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] aspect-square bg-brand-red-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Large Layout: Grid that handles responsive placements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* Left Column (Desktop lines, handles heading, email, stats) */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left z-20">
            {/* Email link (aligned top-left in original) */}
            <div className="hidden lg:block mb-8">
              <a
                href="#"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 text-brand-red-600 font-sans font-bold text-[16px] border-b-2 border-brand-red-200 pb-1 hover:border-brand-red-600 transition-all duration-300 cursor-pointer"
              >
                shaikhadnan862@gmail.com
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Main Greeting Heading */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-brand-dark mb-6">
              Hey There,
              <br />
              I'm <span className="text-brand-red-600">Adnan</span>
            </h1>

            {/* Mobile Email Placement */}
            <div className="block lg:hidden mb-8">
              <a
                href="#"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-brand-red-600 font-sans font-bold text-[15px] border-b border-brand-red-200 pb-0.5 hover:border-brand-red-600 transition-all cursor-pointer"
              >
                <Mail size={14} />
                shaikhadnan862@gmail.com
              </a>
            </div>

            {/* Stats Badge (bottom-left of hero in original) */}
            <div className="mt-4 lg:mt-16 flex items-center justify-center lg:justify-start gap-4">
              <span className="font-display font-black text-6xl sm:text-7xl text-brand-dark tracking-tighter">1+</span>
              <div className="text-left">
                <p className="font-sans font-extrabold text-[12px] text-brand-red-600 tracking-widest uppercase">Years of</p>
                <p className="font-display font-bold text-[16px] text-brand-dark leading-tight">Professional<br />Experience</p>
              </div>
            </div>
          </div>

          {/* Center Column (Avatar + background brush stroke) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 z-10">
            <Avatar />
          </div>

          {/* Right Column (Subtext description & Developer Badge) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full order-3 lg:order-3 text-center lg:text-left z-20">

            {/* Description (top-right of hero in original) */}
            <div className="mb-8 lg:mb-16 lg:mt-12">
              <p className="font-sans font-medium text-[16px] sm:text-[18px] text-brand-muted leading-relaxed">
                I create modern full-stack applications, combining clean code, intuitive design, and AI-driven innovation to build products people love to use.
              </p>
            </div>

            {/* Stamp / Badge (bottom-right of hero in original) */}
            <div className="flex justify-center lg:justify-end items-center mt-6 lg:mt-12">
              <div className="relative w-36 h-36 flex items-center justify-center bg-brand-white p-2 rounded-full border border-brand-red-100 shadow-lg group hover:border-brand-red-300 transition-colors">

                {/* Rotating Text circular SVG */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full animate-spin-slow select-none pointer-events-none"
                >
                  <defs>
                    <path
                      id="stampCirclePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="font-display font-extrabold fill-brand-dark/95 text-[6.2px] tracking-wider">
                    <textPath href="#stampCirclePath" startOffset="0%">
                      FULL-STACK FRONTEND DEVELOPER • REACT SPECIALIST • UI/UX DESIGN •
                    </textPath>
                  </text>
                </svg>

                {/* Inner Static Symbol */}
                <div className="absolute inset-0 flex items-center justify-center font-display font-black text-2xl text-brand-red-600 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
