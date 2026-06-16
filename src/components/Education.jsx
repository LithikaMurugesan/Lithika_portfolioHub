import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      institution: "Sri Shanmugha College of Engineering and Technology, Salem",
      degree: "B.E. Computer Science and Engineering",
      period: "2022 – 2026",
      score: "CGPA: 8.04 / 10",
      description: "Focused on database structures, Object-Oriented methodologies, networking infrastructures, API interfaces, and system-level operations."
    },
    {
      institution: "Krishnaveni Govt Girls Hr Sec School, Pallipalayam",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2021 – 2022",
      score: "Percentage: 81%",
      description: "State Board curriculum, specializing in advanced mathematics, computer science algorithms, physics, and chemistry."
    }
  ];

  return (
    <section id="education" className="py-24 relative" style={{backgroundColor: '#F5F9FF'}}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-sky-accent font-bold mb-3">Academic Background</h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">
            Education
          </p>
        </div>

        {/* Education Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="sky-card p-6 sm:p-8 rounded-2xl border border-sky-border hover:border-sky-accent/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-bg/40 flex items-center justify-center border border-sky-border">
                    <GraduationCap className="w-5 h-5 text-sky-accent" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-sky-navy bg-white border border-sky-border px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-sky-accent" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-sky-navy mb-2 leading-snug">
                  {edu.institution}
                </h3>
                <p className="text-sky-accent font-semibold text-sm mb-4">
                  {edu.degree}
                </p>
                <p className="text-sky-text text-sm leading-relaxed mb-6 font-semibold">
                  {edu.description}
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-sky-border w-fit shadow-sm">
                <BookOpen className="w-4 h-4 text-sky-navy" />
                <span className="text-xs font-bold text-sky-navy uppercase tracking-wider">{edu.score}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
