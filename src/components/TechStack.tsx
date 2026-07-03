import React from 'react';

interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  hoverBorderClass: string;
  hoverShadowClass: string;
}

export const TechStack: React.FC = () => {
  const techStack: TechItem[] = [
    {
      name: 'React',
      category: 'Frontend Library',
      description: 'Declarative, component-based library for building highly interactive and modern user interfaces.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#00D8FF]" fill="none" stroke="currentColor" strokeWidth="2.5">
          <ellipse cx="50" cy="50" rx="8" ry="22" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="8" ry="22" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="8" ry="22" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="4.5" fill="currentColor" />
        </svg>
      ),
      hoverBorderClass: 'hover:border-[#00D8FF]/50',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(0,216,255,0.25)]',
    },
    {
      name: 'Next.js',
      category: 'React Framework',
      description: 'Production-ready framework offering SSR, SSG, server components, and optimized asset rendering.',
      icon: (
        <svg viewBox="0 0 180 180" className="w-8 h-8 text-brand-dark" fill="none">
          <circle cx="90" cy="90" r="90" fill="currentColor"/>
          <path d="M140 140L79.2 60H68v60h8V73.2l54.8 72.8c3.2-3.8 6-7.8 8-12z" fill="white"/>
          <path d="M112 60h8v60h-8z" fill="white"/>
        </svg>
      ),
      hoverBorderClass: 'hover:border-brand-dark/40',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.2)]',
    },
    {
      name: 'Odoo',
      category: 'ERP Systems',
      description: 'Custom module development, workflow automation, and enterprise business applications deployment.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#714B67]" fill="currentColor">
          <path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30c16.6 0 30-13.4 30-30s-13.4-30-30-30zm0 46c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" />
          <path d="M72 45c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" fill="#00A09D" />
        </svg>
      ),
      hoverBorderClass: 'hover:border-[#714B67]/50',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(113,75,103,0.25)]',
    },
    {
      name: 'Node.js',
      category: 'Backend Runtime',
      description: 'Scalable event-driven JavaScript environment used to run secure APIs and fast server-side code.',
      icon: (
        <svg viewBox="0 0 256 295" className="w-8 h-8" fill="none">
          <path d="M128 0L24.8 60v120L128 240l103.2-60V60L128 0z" fill="#339933" />
          <path d="M128 240l103.2-60V60L128 120v120z" fill="#66CC33" />
          <path d="M128 120L24.8 60v120L128 240V120z" fill="#43853D" />
        </svg>
      ),
      hoverBorderClass: 'hover:border-[#339933]/50',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(51,153,51,0.25)]',
    },
    {
      name: 'PostgreSQL',
      category: 'Relational Database',
      description: 'Advanced SQL database built for complex query execution, transactional integrity, and large scale data.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
          <path d="M78 37.8c-2.4-7.5-9-15.6-17.7-18-5.7-1.5-12.3-.9-17.7.9C37.2 19 30.6 18.4 24.9 20c-8.7 2.4-15.3 10.5-17.7 18-3 9.6-1.5 22.8 4.2 30.9C19.8 79.5 35 84 50 84s30.2-4.5 38.6-15.1c5.7-8.1 7.2-21.3 4.2-30.9L78 37.8z" fill="#336791"/>
          <path d="M50 84V52.8c-5.7-2.1-10.8-6.3-14.1-11.7C32.7 36 32.7 30 36 24.9c3.3-5.1 8.4-9.3 14-11.4v-4.5c-7.8 2.1-14.7 7.2-18.9 14.1C27 30 27 37.8 31.1 44.7c4.2 6.9 11.1 12 18.9 14.1V84z" fill="#FFF" opacity="0.3"/>
        </svg>
      ),
      hoverBorderClass: 'hover:border-[#336791]/50',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(51,103,145,0.25)]',
    },
    {
      name: 'MongoDB',
      category: 'NoSQL Database',
      description: 'Document-oriented database storing JSON-like structures, enabling rapid schema scaling and analytics.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
          <path d="M50 10c-3 15-18 35-18 48 0 12 8 22 18 26 10-4 18-14 18-26 0-13-15-33-18-48z" fill="#47A248"/>
          <path d="M50 10v74c10-4 18-14 18-26 0-13-15-33-18-48z" fill="#589636"/>
          <path d="M50 20c-1 10-10 25-10 35 0 8 5 15 10 17V20z" fill="#80C14B" opacity="0.6"/>
        </svg>
      ),
      hoverBorderClass: 'hover:border-[#47A248]/50',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(71,162,72,0.25)]',
    },
    {
      name: 'Prisma ORM',
      category: 'Database Toolkit',
      description: 'Next-generation ORM supporting auto-generated type-safe queries, migrations, and schema design.',
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
          <path d="M48.2 12.3c.8-1.4 2.8-1.4 3.6 0l38.2 66.2c.8 1.4-.2 3.1-1.8 3.1H11.8c-1.6 0-2.6-1.7-1.8-3.1L48.2 12.3z" fill="#1B222D"/>
          <path d="M50 11.5L88 78H50V11.5z" fill="#2D3748" opacity="0.8"/>
          <path d="M50 11.5L12 78h38V11.5z" fill="#5A67D8" opacity="0.9"/>
          <path d="M50 45L88 78H12L50 45z" fill="#0C344B" opacity="0.6"/>
        </svg>
      ),
      hoverBorderClass: 'hover:border-[#5A67D8]/50',
      hoverShadowClass: 'hover:shadow-[0_20px_40px_-15px_rgba(90,103,216,0.25)]',
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-sans font-extrabold text-[12px] text-brand-red-600 tracking-widest uppercase mb-3">
            Core Toolkit
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
            Technical Stack
          </h2>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic centered flex items */}
        <div className="flex flex-wrap justify-center gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)] min-w-[270px] bg-white border border-brand-red-100/50 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group ${tech.hoverBorderClass} ${tech.hoverShadowClass}`}
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center border border-brand-red-100 shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="font-sans font-bold text-brand-red-600 text-[10px] uppercase tracking-wider bg-brand-red-50 px-2.5 py-1 rounded-md">
                    {tech.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-dark mt-6 mb-2 group-hover:text-brand-red-600 transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="font-sans font-medium text-brand-muted text-[14px] leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
