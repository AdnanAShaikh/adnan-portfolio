import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-brand-bg/85 backdrop-blur-md border-b border-brand-red-100/30 py-3 shadow-sm'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="font-display font-extrabold text-2xl tracking-tight text-brand-dark transition-colors group-hover:text-brand-red-600">
            Adnan
          </span>
          <span className="font-display font-black text-2xl text-brand-red-600">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 md:pl-12 lg:pl-40">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-medium text-[15px] text-brand-dark/80 hover:text-brand-red-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions / Download Resume Button */}
        <div className="hidden md:flex items-center gap-4 pl-10">
          <a
            href="/resume.pdf"
            download="Adnan_Shaikh_Resume.pdf"
            className="flex items-center gap-2 bg-white hover:bg-brand-red-50 text-brand-red-600 border border-brand-red-200 px-5 py-2.5 rounded-full font-sans font-semibold text-[14px] transition-all duration-200 shadow-sm hover:shadow-md hover:border-brand-red-300"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-brand-dark md:hidden hover:text-brand-red-600 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-[300px] z-40 bg-white border-l border-brand-red-100 shadow-2xl p-8 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex justify-between items-center pb-4 border-b border-brand-red-50">
            <span className="font-display font-extrabold text-xl text-brand-dark">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-brand-dark hover:text-brand-red-600">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans font-semibold text-[17px] text-brand-dark hover:text-brand-red-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="/resume.pdf"
            download="Adnan_Shaikh_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-brand-red-600 hover:bg-brand-red-700 text-white px-5 py-3.5 rounded-full font-sans font-semibold text-[15px] transition-all shadow-md hover:shadow-lg"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-brand-dark/20 backdrop-blur-xs md:hidden"
        />
      )}
    </nav>
  );
};
