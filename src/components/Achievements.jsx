import { Trophy, Code, CheckCircle } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Winner of Code at Christmas Hackathon",
      sub: "National-Level Hackathon",
      icon: <Trophy className="w-8 h-8 text-sky-accent" />,
      description: "Won the first-place prize in the national-level hackathon. Engineered and deployed a software platform solving real-world challenges within rigid deadline constraints.",
      details: ["Evaluated on design quality, coding structure, and live demonstration", "Collaborated to partition development deliverables efficiently"]
    },
    {
      title: "200+ Algorithmic Challenges Solved",
      sub: "LeetCode & HackerRank Platforms",
      icon: <Code className="w-8 h-8 text-[#8B5CF6]" />,
      description: "Solved a diverse spectrum of challenges involving key algorithmic data structures (Arrays, Linked Lists, Trees, Graphs, Sorting).",
      details: ["Strong focus on optimizing Time and Space execution complexities", "Demonstrated problem-solving agility and coding structure accuracy"]
    }
  ];

  return (
    <section id="achievements" className="py-24 relative" style={{backgroundColor: '#EFF6FF'}}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-sky-accent font-bold mb-3">Key Milestones</h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">
            Honors & Achievements
          </p>
        </div>

        {/* Achievements list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="sky-card p-6 sm:p-8 rounded-2xl border border-sky-border hover:border-sky-accent/30 transition-all duration-300 flex flex-col gap-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-bg/30 flex items-center justify-center border border-sky-border flex-shrink-0">
                  {ach.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-sky-navy leading-snug">
                    {ach.title}
                  </h3>
                  <span className="text-xs font-semibold text-sky-accent uppercase tracking-wider">
                    {ach.sub}
                  </span>
                </div>
              </div>

              <p className="text-sky-text text-sm sm:text-base leading-relaxed font-semibold">
                {ach.description}
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-sky-border">
                {ach.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-sky-text font-bold">
                    <CheckCircle className="w-4 h-4 text-sky-accent flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
