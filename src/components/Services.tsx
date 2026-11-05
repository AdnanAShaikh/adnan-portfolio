import React from 'react';
import { Code2, CpuIcon, Zap } from 'lucide-react';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Code2 size={28} className="text-brand-red-600" />,
      title: 'Frontend Engineering',
      description:
        'Building scalable, high-performance web applications using React, Vite, TypeScript, and Tailwind CSS. Clean structure, type-safety, and modular component design.',
    },
    {
      icon: <CpuIcon size={28} className="text-brand-red-600" />,
      title: 'Backend Engineering',
      description:
        'Designing and developing server-side applications and APIs using Node.js, Express, SQL. Implementing robust authentication, database architecture, and secure scalable backend solutions for modern web applications.',
    },
    {
      icon: <Zap size={28} className="text-brand-red-600" />,
      title: 'Performance & Speed',
      description:
        'Optimizing bundle sizes, code splitting, asset loading, and runtime rendering. Delivering sub-second interactive states to maximize user conversion.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-sans font-extrabold text-[12px] text-brand-red-600 tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
            My Services
          </h2>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-bg border border-brand-red-100/50 p-8 sm:p-10 rounded-3xl hover:border-brand-red-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-white rounded-2xl flex items-center justify-center border border-brand-red-100 shadow-sm mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mb-4">
                {service.title}
              </h3>
              <p className="font-sans font-medium text-brand-muted text-[15px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
