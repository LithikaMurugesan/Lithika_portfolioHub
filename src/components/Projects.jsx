import { Code2, PiggyBank, GraduationCap, CheckSquare } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "FeeHive",
      icon: <GraduationCap className="w-6 h-6 text-sky-accent" />,
      description: "Developed a scalable full-stack MERN application to manage student fees, receipts, and financial transactions efficiently.",
      highlights: [
        "Implemented secure JWT-based authentication alongside granular role-based authorization",
        "Designed flexible MongoDB database schemas using Mongoose for receipt storage",
        "Built a highly responsive React dashboard for accountant and admin operations"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
      github: "https://github.com/seethalakshmivenkatesh/Fees_Management"
    },
    {
      title: "ExpensioX",
      icon: <PiggyBank className="w-6 h-6 text-sky-navy" />,
      description: "Developed a full-stack expense tracking application using the MERN stack for personal finance monitoring.",
      highlights: [
        "Designed modular RESTful CRUD APIs using Node.js, Express.js, and MongoDB",
        "Built a responsive React interface with native form validation and dynamic graphs",
        "Configured secure state handlers and transaction categorization parameters"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/LithikaMurugesan/ExpinsioX"
    },
    {
      title: "EduReg",
      icon: <Code2 className="w-6 h-6 text-sky-accent" />,
      description: "Developed an academic registration system using robust object-oriented programming principles and workflows.",
      highlights: [
        "Designed structured students, courses, and department entities with clean model relationships",
        "Implemented enrollment logic, dynamic prerequisite checks, and class conflict algorithms",
        "Developed custom sorting and selection patterns for registrants"
      ],
      tech: ["Java", "OOP", "Data Structures", "Algorithms"],
      github: "https://github.com/LithikaMurugesan/EduReg"
    },
    {
      title: "Task Manager",
      icon: <CheckSquare className="w-6 h-6 text-sky-navy" />,
      description: "Developed a responsive task tracking and management web interface to organize tasks with priorities, sorting, and status changes.",
      highlights: [
        "Structured modular state routines to securely edit, toggle, and partition workflow states",
        "Designed a sleek and intuitive mobile-friendly dashboard for daily work management",
        "Implemented local sorting parameters and visual categories for active listings"
      ],
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/LithikaMurugesan/Task_Manager"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{backgroundColor: '#F5F9FF'}}>
      <div className="absolute inset-0 glow-spot-blue rounded-full pointer-events-none opacity-40 top-1/4 right-0 w-[500px] h-[500px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-sky-accent font-bold mb-3">Portfolio Highlights</h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">
            Key Software Projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="sky-card rounded-2xl overflow-hidden border border-sky-border hover:border-sky-accent/30 flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm"
            >
              <div className="p-6 sm:p-8">
                {/* Icon & Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-bg/45 border border-sky-border flex items-center justify-center">
                    {proj.icon}
                  </div>
                  <div className="flex items-center gap-3 no-print">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white hover:bg-sky-accent hover:text-white text-sky-text rounded-xl border border-sky-border transition-colors flex items-center justify-center"
                      aria-label={`${proj.title} source code`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-sky-navy mb-3 group-hover:text-sky-accent transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-sky-text text-sm leading-relaxed mb-6 font-semibold">
                  {proj.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {proj.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-sky-text leading-relaxed font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-accent mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / Tech list */}
              <div className="p-6 sm:px-8 border-t border-sky-border bg-sky-bg/20">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white text-sky-navy border border-sky-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
