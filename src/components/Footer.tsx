import React from 'react';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';
import { useToast } from './Toast';

export const Footer: React.FC = () => {
  const { showToast } = useToast();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('shaikhadnan862@gmail.com');
    showToast('Email copied to clipboard!');
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white relative overflow-hidden py-24">
      {/* Red ambient light effects */}
      <div className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-brand-red-700/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Main "Get in Touch" CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-sans font-extrabold text-[12px] text-brand-red-400 tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
              Let's create something
              <br />
              <span className="text-brand-red-500">amazing</span> together.
            </h2>
            <p className="font-sans text-white/70 max-w-lg leading-relaxed text-[16px]">
              Whether you need a high-fidelity React frontend, a custom web app built from the ground up, or some architectural advice — feel free to drop a line!
            </p>
          </div>

          {/* Contact Actions Button column */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:items-end gap-6">
            {/* The main Email Button */}
            <a
              href="#"
              onClick={handleCopyEmail}
              className="group inline-flex items-center justify-center gap-3 bg-brand-red-600 hover:bg-brand-red-700 text-white font-sans font-bold text-[16px] px-8 py-5 rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-0.5 active:translate-y-0 hover:shadow-brand-red-600/30 hover:shadow-xl cursor-pointer"
            >
              <Mail size={18} className="transform group-hover:scale-110 transition-transform" />
              shaikhadnan862@gmail.com
              <ArrowUpRight size={16} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Secondary Resume Action in Footer */}
            <a
              href="/resume.pdf"
              download="Adnan_Shaikh_Resume.pdf"
              className="group inline-flex items-center justify-center gap-2 text-white/80 hover:text-brand-red-400 font-sans font-semibold text-[14px] transition-colors"
            >
              <FileText size={15} />
              Looking for my Resume? Download here
            </a>
          </div>

        </div>

        {/* Bottom Bar: Brand, Socials, Copyright */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[14px] text-white/50">

          {/* Footer Logo */}
          <div className="flex items-center gap-1">
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              Adnan
            </span>
            <span className="font-display font-black text-xl text-brand-red-500">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AdnanAShaikh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red-500 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/adnanshaikh10036"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-red-500 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-sans text-center sm:text-right">
            © {new Date().getFullYear()} Adnan Shaikh. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};
