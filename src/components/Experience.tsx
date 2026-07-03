import React from 'react';

interface ExperienceItem {
  company: string;
  location: string;
  duration: string;
  title: string;
  description: string;
  color: string; // Tailored shades of red/rose/crimson
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'NOI Technologies',
      location: 'Jaipur, IN',
      duration: 'Sep 2024 - Mar 2026',
      title: 'Junior Software Dev',
      description:
        `Architect and lead
         frontend engineering for flagship enterprise 
         web applications using React 18, TypeScript, 
         and Tailwind CSS. Built customized design systems, 
         introduced modular clean code patterns, and optimized 
         build pipelines using Vite, resulting in a 45% improvement in performance.`,
      color: 'bg-brand-red-600 ring-brand-red-200',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-brand-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#be123c05_1px,transparent_1px),linear-gradient(to_bottom,#be123c05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-sans font-extrabold text-[12px] text-brand-red-600 tracking-widest uppercase mb-3">
            Career Journey
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          {/* Middle Vertical Line (Dashed) - Desktop only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-brand-red-200 hidden md:block" />

          {/* Left Vertical Line (Dashed) - Mobile only */}
          <div className="absolute left-4 transform top-2 bottom-2 w-0.5 border-l-2 border-dashed border-brand-red-200 md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => {
              // Alternates items left and right on desktop
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Company / Dates Column */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:px-12 flex flex-col justify-center text-left ${isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                  >
                    <span className="font-sans font-bold text-brand-red-600 text-[14px] uppercase tracking-wider mb-1 block">
                      {exp.duration}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-brand-dark mb-0.5">
                      {exp.company}
                    </h3>
                    <p className="font-sans font-semibold text-brand-muted text-[13px] tracking-wide">
                      {exp.location}
                    </p>
                  </div>

                  {/* Timeline Bullet Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 top-0 md:top-1/2 md:-translate-y-1/2">
                    <div className={`w-5 h-5 rounded-full ${exp.color} ring-4 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-125`}>
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Description / Title Column */}
                  <div className="w-full md:w-1/2 pl-12 md:px-12 mt-4 md:mt-0 flex flex-col justify-center text-left">
                    <h4 className="font-display font-extrabold text-[18px] sm:text-[20px] text-brand-dark mb-3">
                      {exp.title}
                    </h4>
                    <p className="font-sans text-justify font-medium text-[15px] leading-relaxed text-brand-muted">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
