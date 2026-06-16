import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Aroopa Technologies Pvt. Ltd.",
      location: "Chennai, Tamil Nadu, India",
      period: "Mar 2025 – Sep 2025",
      type: "Internship",
      details: [
        "Developed solid backend modules using Node.js and Express.js, following clean architecture and modular design principles.",
        "Designed, developed, tested, and documented secure RESTful APIs using Express.js, integrating database workflows.",
        "Created and managed thorough API mock environments and documentation suites in Postman to ensure seamless developer testing.",
        "Collaborated closely with cross-functional team members to debug codebase issues, optimize query speeds, and deliver reliable product releases."
      ],
      tech: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Postman", "Git", "GitHub"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative" style={{backgroundColor: '#EFF6FF'}}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-sky-accent font-bold mb-3">Work History</h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">
            Professional Experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 border-l border-sky-border pb-12 last:pb-0">
              
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-sky-accent flex items-center justify-center text-sky-accent shadow-sm">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="sky-card p-6 sm:p-8 rounded-2xl border border-sky-border hover:border-sky-accent/45 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-sky-navy">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sky-muted text-sm font-semibold">
                      <span className="font-semibold text-sky-accent">{exp.company}</span>
                      <span className="flex items-center gap-1 font-semibold"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-navy bg-white border border-sky-border px-3 py-1.5 rounded-lg w-fit">
                    <Calendar className="w-4 h-4 text-sky-accent" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sky-text text-sm sm:text-base leading-relaxed font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-accent mt-2.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-sky-border">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded bg-white text-sky-text border border-sky-border hover:border-sky-accent/20 transition-colors"
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
