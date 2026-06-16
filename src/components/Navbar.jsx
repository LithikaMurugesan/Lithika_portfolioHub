import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Education',     href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',       href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── scroll handler ── */
  useEffect(() => {
    document.documentElement.classList.remove('dark');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const ids = navItems.map(n => n.href.slice(1));
      const scrollPos = window.scrollY + 160;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── body scroll lock when mobile menu is open ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ── smooth scroll to section ── */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'py-3 border-b'
          : 'py-4 bg-transparent'
      }`}
      style={
        scrolled
          ? { backgroundColor: 'rgba(239,246,255,0.97)', backdropFilter: 'blur(12px)', borderColor: '#DBEAFE', boxShadow: '0 2px 20px rgba(30,58,138,0.06)' }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={e => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm transition-transform group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #2563EB, #1E3A8A)' }}
          >
            LM
          </div>
          <span
            className="font-bold text-lg font-heading transition-colors"
            style={{ color: '#1E3A8A' }}
            onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
            onMouseLeave={e => e.currentTarget.style.color = '#1E3A8A'}
          >
            Lithika M.
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: isActive ? '#2563EB' : '#4B5563',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? '#EFF6FF' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#2563EB';
                    e.currentTarget.style.backgroundColor = '#F0F7FF';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#4B5563';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: '#2563EB' }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ color: '#4B5563' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#EFF6FF'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          aria-label="Toggle navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Drawer Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-over Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[80vw] z-50 bg-white border-l border-sky-border shadow-2xl p-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-sky-border mb-5">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-xs"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1E3A8A)' }}
            >
              LM
            </div>
            <span className="font-bold text-sm" style={{ color: '#1E3A8A' }}>Lithika M.</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-sky-bg text-sky-text transition-colors"
            style={{ color: '#4B5563' }}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col gap-1.5 overflow-y-auto flex-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className="flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  color: isActive ? '#2563EB' : '#374151',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? '#EFF6FF' : 'transparent',
                }}
              >
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-2.5 flex-shrink-0"
                    style={{ backgroundColor: '#2563EB' }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
