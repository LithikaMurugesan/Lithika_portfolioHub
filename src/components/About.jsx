import { Server, Database, Code2, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-sky-accent" />,
      title: "Full-Stack Development",
      description: "Hands-on experience in building scalable web applications with MERN stack, React, and Tailwind CSS."
    },
    {
      icon: <Server className="w-6 h-6 text-sky-navy" />,
      title: "REST APIs & JWT",
      description: "Proficient in building secure JWT authenticated APIs, CRUD endpoints, and comprehensive API testing with Postman."
    },
    {
      icon: <Users className="w-6 h-6 text-sky-accent" />,
      title: "Collaborative Debugging",
      description: "A collaborative mindset to optimize applications, solve debug tickets, and deliver quality features."
    },
    {
      icon: <Database className="w-6 h-6 text-sky-navy" />,
      title: "OOP & Data Structures",
      description: "Strong foundation in data structures, algorithms, object-oriented concepts, and clean coding practices."
    }
  ];

  return (
    <section id="about" className="py-24 relative" style={{backgroundColor: '#F0F7FF'}}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-sky-accent font-bold mb-3">About Me</h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">
            Building Reliable Software Solutions
          </p>
        </div>

        {/* Clean layout without duplicate picture */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-sky-navy">My Journey & Objective</h3>
            <p className="text-sky-text leading-relaxed text-base sm:text-lg font-medium">
              I am a recent B.E. Computer Science and Engineering graduate with hands-on experience in full-stack web development through internships and personal projects. I enjoy building responsive web applications, creating RESTful APIs, and solving real-world problems with clean, maintainable, and efficient code.
            </p>
            <p className="text-sky-text leading-relaxed text-base sm:text-lg font-medium">
              I have worked with technologies including React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, and Tailwind CSS to develop practical applications and strengthen my development skills. I am passionate about continuous learning, collaborating with experienced developers, and contributing to meaningful software projects.
            </p>
            <p className="text-sky-text leading-relaxed text-base sm:text-lg font-medium">
              As an aspiring Full Stack Developer, I am eager to apply my technical knowledge, grow in a professional environment, and build reliable, user-friendly applications that deliver great user experiences.
            </p>
          </div>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-white border border-sky-border flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-sky-muted uppercase">Field of study</h4>
                <p className="text-sm font-semibold text-sky-navy">Computer Science & Engineering</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-sky-border flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-navy flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-sky-muted uppercase">Location</h4>
                <p className="text-sm font-semibold text-sky-navy">Erode, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((h, i) => (
            <div key={i} className="p-6 rounded-2xl sky-card sky-card-hover flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-bg flex items-center justify-center border border-sky-border shadow-inner">
                {h.icon}
              </div>
              <div>
                <h4 className="font-bold text-sky-navy mb-2 font-heading text-base">{h.title}</h4>
                <p className="text-sm text-sky-text leading-relaxed font-medium">{h.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
