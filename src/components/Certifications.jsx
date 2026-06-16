import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Deep Learning and Visual Computing",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      details: "In-depth study of convolutional networks, visual feature extractions, computer vision algorithms, and neural network optimization.",
      date: "Verified"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      details: "Comprehensive study of virtualization layers, storage networks, resource orchestration, and distributed cloud computing APIs.",
      date: "Verified"
    },
    {
      title: "Full Stack Development Training",
      issuer: "Novitech R&D Private Limited",
      details: "Industrial grade training focusing on building frontends, REST backends, relational databases, state stores, and deployment models.",
      date: "Verified"
    },
    {
      title: "Frontend Developer Training",
      issuer: "Training Trains",
      details: "Acquired solid knowledge of HTML5, CSS3, and JavaScript, building interactive user interfaces and responsive web projects.",
      date: "Dec 2024 – Jan 2025"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative" style={{backgroundColor: '#F0F7FF'}}>
      <div className="absolute inset-0 glow-spot-blue rounded-full pointer-events-none opacity-25 top-3/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-sky-accent font-bold mb-3">Industry Credentials</h2>
          <p className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">
            Certifications & Training
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="sky-card p-6 sm:p-8 rounded-2xl border border-sky-border hover:border-sky-accent/30 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#DBEAFE', border: '1px solid #93C5FD'}}>
                    <Award className="w-5 h-5" style={{color: '#1E3A8A'}} />
                  </div>
                  <span
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                    style={cert.date === 'Verified'
                      ? {backgroundColor: '#D1FAE5', color: '#065F46', border: '1.5px solid #6EE7B7'}
                      : {backgroundColor: '#DBEAFE', color: '#1E3A8A', border: '1.5px solid #93C5FD'}
                    }
                  >
                    <CheckCircle className="w-3.5 h-3.5" style={{color: cert.date === 'Verified' ? '#059669' : '#2563EB'}} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-sky-navy mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sky-accent text-xs font-bold uppercase tracking-wider mb-4">
                  {cert.issuer}
                </p>
                <p className="text-sky-text text-sm leading-relaxed mb-6 font-semibold">
                  {cert.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
