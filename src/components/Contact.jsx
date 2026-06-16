import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin, Send, Download,
  CheckCircle, AlertCircle, Loader2, MessageSquare,
} from 'lucide-react';

/* Inline SVGs for icons not exported by this lucide-react version */
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
  </svg>
);

/* ─────────────────────────────────────────────
   EmailJS configuration
   Replace the three values below with your own
   from https://www.emailjs.com/
   
   SERVICE_ID  → Your EmailJS service ID
   TEMPLATE_ID → Your EmailJS template ID  
   PUBLIC_KEY  → Your EmailJS public key
───────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lithika';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

/* contact info cards */
const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lithika2404@gmail.com',
    href: 'mailto:lithika2404@gmail.com',
    accentBg: '#DBEAFE',
    accentColor: '#2563EB',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7806837553',
    href: 'tel:+917806837553',
    accentBg: '#D1FAE5',
    accentColor: '#059669',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Erode, Tamil Nadu, India',
    href: null,
    accentBg: '#FEF3C7',
    accentColor: '#D97706',
  },
];

/* input field style helper */
const inputBase = {
  width: '100%',
  backgroundColor: '#FFFFFF',
  border: '1.5px solid #DBEAFE',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '0.875rem',
  color: '#1E3A8A',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  fontFamily: 'inherit',
};

function FormField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[11px] font-bold uppercase tracking-widest"
        style={{ color: '#6B7280' }}
      >
        {label}
        {required && <span style={{ color: '#EF4444' }}> *</span>}
      </label>
      {children}
    </div>
  );
}

/* ── Main component ── */
export default function Contact() {
  const formRef  = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    from_name: '', from_email: '', subject: '', message: '',
  });
  const [status, setStatus] = useState({
    sending: false, success: false, error: null,
  });

  /* intersection observer for fade-in */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFocus = (e) => {
    e.target.style.borderColor = '#2563EB';
    e.target.style.boxShadow   = '0 0 0 3px rgba(37,99,235,0.1)';
  };
  const handleBlur  = (e) => {
    e.target.style.borderColor = '#DBEAFE';
    e.target.style.boxShadow   = 'none';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.from_name.trim() || !form.from_email.trim() || !form.message.trim()) {
      setStatus({ sending: false, success: false, error: 'Please fill in all required fields (Name, Email, and Message).' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.from_email.trim())) {
      setStatus({ sending: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ sending: true, success: false, error: null });

    /* Build template params — these names must match your EmailJS template */
    const templateParams = {
      from_name:  form.from_name.trim(),
      from_email: form.from_email.trim(),
      subject:    form.subject.trim() || 'Portfolio Contact',
      message:    form.message.trim(),
      to_name:    'Lithika',
      reply_to:   form.from_email.trim(),
      sent_at:    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus({ sending: false, success: true, error: null });
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      /* auto-clear success after 6 s */
      setTimeout(() =>
        setStatus({ sending: false, success: false, error: null }), 6000
      );
    } catch (err) {
      console.error('EmailJS error details:', err.text || err.message || err);
      setStatus({
        sending: false,
        success: false,
        error: `Failed to send message: ${err.text || 'Service unavailable'}. Please email lithika2404@gmail.com directly.`,
      });
    }
  };



  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#EFF6FF' }}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Section heading ── */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: '#2563EB', backgroundColor: '#DBEAFE' }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold font-heading mb-3"
            style={{ color: '#1E3A8A' }}
          >
            Let's Connect &amp; Collaborate
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#4B5563' }}>
            Whether you have an opportunity, a project idea, or just want to say hi —
            I'd love to hear from you!
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* ── LEFT: info + resume ── */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            {/* Contact cards */}
            {contactCards.map(({ icon: Icon, label, value, href, accentBg, accentColor }) => {
              const inner = (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border transition-all duration-300"
                  style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 12px rgba(30,58,138,0.04)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = accentColor; e.currentTarget.style.boxShadow = `0 6px 20px ${accentColor}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(30,58,138,0.04)'; }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: accentBg }}>
                    <Icon className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#9CA3AF' }}>{label}</p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: '#1E3A8A' }}>{value}</p>
                  </div>
                </div>
              );
              return href
                ? <a key={label} href={href} className="block">{inner}</a>
                : <div key={label}>{inner}</div>;
            })}

            {/* Resume / CV download */}
            <div
              className="p-6 rounded-2xl border"
              style={{
                background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                borderColor: '#BFDBFE',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5" style={{ color: '#2563EB' }} />
                <h4 className="font-bold" style={{ color: '#1E3A8A' }}>My Resume</h4>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                Download a print-ready copy of my resume with all skills, projects, and credentials.
              </p>
              <a
                href="/resume.pdf"
                download="Lithika_Murugesan_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #2563EB, #1E3A8A)', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,99,235,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.3)'; }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/LithikaMurugesan',           icon: GithubIcon,   label: 'GitHub',   color: '#181616' },
                { href: 'https://www.linkedin.com/in/lithika-murugesan/', icon: LinkedinIcon, label: 'LinkedIn', color: '#0A66C2' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all duration-200"
                  style={{ borderColor: '#DBEAFE', color: '#374151', backgroundColor: '#fff' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; e.currentTarget.style.backgroundColor = '#F8FAFC'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#DBEAFE'; e.currentTarget.style.color = '#374151'; e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.transform = 'none'; }}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: contact form ── */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
            }}
          >
            <div
              className="rounded-3xl border p-7 sm:p-9"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E2E8F0',
                boxShadow: '0 8px 40px rgba(30,58,138,0.07)',
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #1E3A8A)' }}
                >
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold font-heading text-xl" style={{ color: '#1E3A8A' }}>
                    Send a Message
                  </h3>
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>
                    I typically reply within 24 hours
                  </p>
                </div>
              </div>

              {/* Success banner */}
              {status.success && (
                <div
                  className="flex items-start gap-3 p-4 rounded-xl mb-5"
                  style={{ backgroundColor: '#F0FDF4', border: '1.5px solid #BBF7D0' }}
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#16A34A' }} />
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#15803D' }}>Message sent successfully! 🎉</p>
                    <p className="text-xs mt-0.5" style={{ color: '#16A34A' }}>
                      Thank you for reaching out. I'll get back to you shortly!
                    </p>
                  </div>
                </div>
              )}

              {/* Error banner */}
              {status.error && (
                <div
                  className="flex items-start gap-3 p-4 rounded-xl mb-5"
                  style={{ backgroundColor: '#FFF1F2', border: '1.5px solid #FECDD3' }}
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#BE123C' }} />
                  <p className="text-sm font-medium" style={{ color: '#9F1239' }}>{status.error}</p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Your Name" required>
                    <input
                      type="text"
                      name="from_name"
                      id="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      required
                      style={inputBase}
                    />
                  </FormField>

                  <FormField label="Email Address" required>
                    <input
                      type="email"
                      name="from_email"
                      id="from_email"
                      value={form.from_email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="jane@example.com"
                      required
                      style={inputBase}
                    />
                  </FormField>
                </div>

                {/* Subject */}
                <FormField label="Subject">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Internship Opportunity / Project Collaboration"
                    style={inputBase}
                  />
                </FormField>

                {/* Message */}
                <FormField label="Message" required>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Hi Lithika, I'd love to discuss..."
                    required
                    style={{ ...inputBase, resize: 'none', lineHeight: '1.6' }}
                  />
                </FormField>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status.sending || status.success}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white transition-all duration-200"
                  style={{
                    background: status.success
                      ? 'linear-gradient(135deg, #16A34A, #15803D)'
                      : 'linear-gradient(135deg, #2563EB, #1E3A8A)',
                    boxShadow: status.success
                      ? '0 4px 14px rgba(22,163,74,0.3)'
                      : '0 4px 14px rgba(37,99,235,0.3)',
                    opacity: status.sending ? 0.85 : 1,
                    cursor: status.sending ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (!status.sending && !status.success) {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(37,99,235,0.4)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = status.success
                      ? '0 4px 14px rgba(22,163,74,0.3)'
                      : '0 4px 14px rgba(37,99,235,0.3)';
                  }}
                >
                  {status.sending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : status.success ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-[11px]" style={{ color: '#9CA3AF' }}>
                  Your information is safe and will never be shared.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
