import { useEffect, useRef, useState } from 'react';

/* ── Data ── */
const categories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    accentFrom: '#2563EB',
    accentTo: '#1E3A8A',
    accentLight: '#DBEAFE',
    accentText: '#1E3A8A',
    skills: [
      { name: 'C',          pct: 80 },
      { name: 'Java',       pct: 90 },
      { name: 'Python',     pct: 72 },
      { name: 'JavaScript', pct: 88 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    accentFrom: '#0EA5E9',
    accentTo: '#2563EB',
    accentLight: '#E0F2FE',
    accentText: '#0369A1',
    skills: [
      { name: 'HTML5',       pct: 92 },
      { name: 'CSS3',        pct: 90 },
      { name: 'Tailwind CSS', pct: 88 },
      { name: 'React.js',    pct: 85 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    accentFrom: '#6366F1',
    accentTo: '#4F46E5',
    accentLight: '#EEF2FF',
    accentText: '#4338CA',
    skills: [
      { name: 'Node.js',    pct: 85 },
      { name: 'Express.js', pct: 85 },
      { name: 'MongoDB',    pct: 82 },
      { name: 'MySQL',      pct: 78 },
    ],
  },
];

/* ── Individual progress bar that animates on first view ── */
function SkillBar({ name, pct, accentFrom, accentTo, delay = 0 }) {
  const ref  = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(pct), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold" style={{ color: '#1E3A8A' }}>{name}</span>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: '#EFF6FF', color: '#2563EB' }}
        >
          {pct}%
        </span>
      </div>
      <div
        className="w-full h-2.5 rounded-full overflow-hidden"
        style={{ backgroundColor: '#E2E8F0' }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
            transition: 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: `0 1px 6px ${accentFrom}55`,
          }}
        />
      </div>
    </div>
  );
}

/* ── Single category card ── */
function CategoryCard({ cat, cardIndex }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-2xl p-7 bg-white border transition-all duration-400 group"
      style={{
        borderColor: '#E2E8F0',
        boxShadow: '0 4px 20px rgba(30,58,138,0.05)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.65s ease ${cardIndex * 120}ms, transform 0.65s ease ${cardIndex * 120}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = cat.accentFrom;
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(37,99,235,0.12)`;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#E2E8F0';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(30,58,138,0.05)';
        e.currentTarget.style.transform = visible ? 'translateY(0)' : 'translateY(32px)';
      }}
    >
      {/* Card header */}
      <div className="mb-6">
        <h3
          className="text-lg font-extrabold font-heading mb-2 tracking-tight"
          style={{ color: cat.accentText }}
        >
          {cat.title}
        </h3>
        {/* Accent underline */}
        <div
          className="h-1 w-10 rounded-full"
          style={{ background: `linear-gradient(90deg, ${cat.accentFrom}, ${cat.accentTo})` }}
        />
      </div>

      {/* Skill bars */}
      <div className="space-y-5 flex-1">
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            pct={skill.pct}
            accentFrom={cat.accentFrom}
            accentTo={cat.accentTo}
            delay={cardIndex * 120 + i * 100 + 200}
          />
        ))}
      </div>

      {/* Category badge */}
      <div
        className="mt-6 pt-5 flex items-center justify-between"
        style={{ borderTop: `1px solid ${cat.accentLight}` }}
      >
        <span
          className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: cat.accentLight, color: cat.accentText }}
        >
          {cat.skills.length} Skills
        </span>
        <span className="text-xs font-semibold" style={{ color: '#94A3B8' }}>
          Avg {Math.round(cat.skills.reduce((a, s) => a + s.pct, 0) / cat.skills.length)}%
        </span>
      </div>
    </div>
  );
}

/* ── Core CS chips (bonus visual) ── */
const coreChips = [
  'Data Structures', 'Algorithms', 'OOP', 'Operating Systems',
  'DBMS', 'Computer Networks', 'REST APIs', 'JWT Auth',
];

/* ── Section ── */
export default function Skills() {
  const headRef = useRef(null);
  const [headVisible, setHeadVisible] = useState(false);
  const chipsRef = useRef(null);
  const [chipsVisible, setChipsVisible] = useState(false);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVisible(true); }, { threshold: 0.3 });
    if (headRef.current) obs1.observe(headRef.current);

    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setChipsVisible(true); }, { threshold: 0.2 });
    if (chipsRef.current) obs2.observe(chipsRef.current);

    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section id="skills" className="py-24 relative" style={{ backgroundColor: '#F5F9FF' }}>
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── Heading ── */}
        <div
          ref={headRef}
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: '#2563EB', backgroundColor: '#DBEAFE' }}
          >
            Technical Toolkit
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold font-heading mb-3"
            style={{ color: '#1E3A8A' }}
          >
            Skills &amp; Expertise
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#4B5563' }}>
            A snapshot of the technologies I use daily to build scalable, high-quality software.
          </p>
        </div>

        {/* ── Three category cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} cardIndex={i} />
          ))}
        </div>

        {/* ── Core CS knowledge chips ── */}
        <div
          ref={chipsRef}
          className="mt-12 p-7 rounded-2xl bg-white border"
          style={{
            borderColor: '#E2E8F0',
            boxShadow: '0 4px 20px rgba(30,58,138,0.05)',
            opacity: chipsVisible ? 1 : 0,
            transform: chipsVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <h3 className="font-extrabold text-base" style={{ color: '#1E3A8A' }}>
              Core CS Fundamentals
            </h3>
            <div className="flex-1 h-px" style={{ backgroundColor: '#DBEAFE' }} />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {coreChips.map((chip, i) => (
              <span
                key={chip}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl border cursor-default transition-all duration-200"
                style={{
                  backgroundColor: '#EFF6FF',
                  borderColor: '#BFDBFE',
                  color: '#1E3A8A',
                  opacity: chipsVisible ? 1 : 0,
                  transform: chipsVisible ? 'scale(1)' : 'scale(0.85)',
                  transition: `opacity 0.4s ease ${0.35 + i * 0.05}s, transform 0.4s ease ${0.35 + i * 0.05}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#2563EB';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#2563EB';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#EFF6FF';
                  e.currentTarget.style.color = '#1E3A8A';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
