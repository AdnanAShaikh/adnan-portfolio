import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export const Works: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: 'BNPL Web App',
      category: 'Web App',
      description:
        'A simple, intuitive web application for managing Buy Now, Pay Later transactions, featuring roles based access, file uploading, dashboard, tables.',
      tags: ['React', 'TypeScript', 'Nodejs', 'Express', 'Prisma', 'Tailwind', 'Recharts'],
      githubUrl: 'https://github.com/AdnanAShaikh/bnpl-merchant-buyer',
      liveUrl: 'https://bnpl-merchant-buyer.onrender.com',
    },
    {
      title: 'Code Editor',
      category: 'Web App',
      description:
        'A responsive, full-featured online code editor allowing users to write, edit, and compile code in multiple languages. It includes syntax highlighting, real-time output monitoring, and saved session management.',
      tags: ['React', 'Nodejs', 'Express'],
      githubUrl: 'https://github.com/AdnanAShaikh/code_editor',
      liveUrl: 'https://code-editor-b2st.onrender.com',
    },
    {
      title: 'Movies API',
      category: 'Web App',
      description:
        'A highly responsive, fluid drag-and-drop planning tool mapping tasks across agile columns, tracking timelines, and logging teammate schedules.',
      tags: ['React'],
      githubUrl: 'https://github.com/AdnanAShaikh/movies-api-reactjs',
      liveUrl: 'https://moviess-hwup.onrender.com',
    },
  ];

  return (
    <section id="works" className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-sans font-extrabold text-[12px] text-brand-red-600 tracking-widest uppercase mb-3">
            My Portfolio
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
            Featured Works
          </h2>
          <div className="w-16 h-1 bg-brand-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-brand-red-100/50 rounded-3xl p-8 flex flex-col justify-between hover:border-brand-red-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="font-sans font-bold text-brand-red-600 text-[11px] uppercase tracking-widest bg-brand-red-50 px-3 py-1.5 rounded-full inline-block mb-6">
                  {project.category}
                </span>

                <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-3 group-hover:text-brand-red-600 transition-colors">
                  {project.title}
                </h3>

                <p className="font-sans font-medium text-brand-muted text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] text-brand-dark/70 bg-brand-bg px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-brand-red-50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-sans font-bold text-[14px] text-brand-dark/80 hover:text-brand-red-600 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-sans font-bold text-[14px] text-brand-red-600 hover:text-brand-red-700 transition-colors ml-auto group/link"
                  >
                    Demo
                    <ArrowUpRight size={15} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
