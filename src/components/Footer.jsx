import { Mail, Phone, MapPin, Download, ArrowUp, ExternalLink } from 'lucide-react';

/* ── Social icon SVGs ── */
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/LithikaMurugesan',
    icon: GithubIcon,
    hoverColor: '#1E3A8A',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lithika-murugesan/',
    icon: LinkedinIcon,
    hoverColor: '#0A66C2',
  },
  {
    label: 'Email',
    href: 'mailto:lithika2404@gmail.com',
    icon: Mail,
    hoverColor: '#2563EB',
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lithika2404@gmail.com',
    href: 'mailto:lithika2404@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7806837553',
    href: 'tel:+917806837553',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Erode, Tamil Nadu, India',
    href: null,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="no-print relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F0F7FF 0%, #ffffff 100%)',
        borderTop: '1.5px solid #DBEAFE',
        borderRadius: '28px 28px 0 0',
        boxShadow: '0 -8px 40px rgba(30,58,138,0.06)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-6">
        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12" style={{ borderBottom: '1px solid #DBEAFE' }}>

          {/* 1 · Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563EB, #1E3A8A)' }}
              >
                LM
              </div>
              <div>
                <p className="font-bold text-base leading-tight" style={{ color: '#1E3A8A' }}>Lithika Murugesan</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
              Aspiring Full Stack Developer | MERN Stack Enthusiast
            </p>
            <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
              Passionate about building reliable, scalable, and elegant software solutions that make a difference.
            </p>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Lithika_Murugesan_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1E3A8A)', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* 2 · Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: '#1E3A8A' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: '#4B5563' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
                    onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{ backgroundColor: '#BFDBFE' }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 · Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: '#1E3A8A' }}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#DBEAFE' }}
                    >
                      <Icon className="w-4 h-4" style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#9CA3AF' }}>
                        {item.label}
                      </p>
                      <p className="text-sm font-medium mt-0.5" style={{ color: '#1E3A8A' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block transition-opacity hover:opacity-75"
                    >
                      {content}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>{content}</li>
                );
              })}
            </ul>
          </div>

          {/* 4 · Connect / Social */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: '#1E3A8A' }}>
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200"
                  style={{ borderColor: '#DBEAFE', color: '#374151', backgroundColor: '#fff' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = hoverColor;
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.backgroundColor = '#F0F7FF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 4px 12px ${hoverColor}22`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#DBEAFE';
                    e.currentTarget.style.color = '#374151';
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="mt-5 p-3 rounded-xl border flex items-center gap-2"
              style={{ backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#22C55E' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: '#16A34A' }} />
              </span>
              <p className="text-xs font-semibold" style={{ color: '#15803D' }}>
                Open to Internships &amp; Roles
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium" style={{ color: '#6B7280' }}>
              &copy; {year} Lithika. All Rights Reserved.
            </p>
            <p className="text-[11px] mt-0.5" style={{ color: '#9CA3AF' }}>
              Built with{' '}
              <span className="font-semibold" style={{ color: '#61DAFB' }}>React</span>
              {' '}&amp;{' '}
              <span className="font-semibold" style={{ color: '#38BDF8' }}>Tailwind CSS</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>
              Crafted with ❤️ in Erode, TN
            </span>
            <button
              onClick={scrollTop}
              title="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200"
              style={{ borderColor: '#DBEAFE', color: '#2563EB', backgroundColor: '#EFF6FF' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#2563EB';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = '#2563EB';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#EFF6FF';
                e.currentTarget.style.color = '#2563EB';
                e.currentTarget.style.borderColor = '#DBEAFE';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
