import { Mail, FileText, ArrowRight, Code, MapPin } from 'lucide-react';

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

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-sky-bg">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] glow-spot-blue rounded-full pointer-events-none opacity-80" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] glow-spot-soft rounded-full pointer-events-none opacity-90" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay-sky [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none no-print" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Details Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full sky-card text-xs sm:text-sm font-semibold text-sky-accent border border-sky-border shadow-sm animate-fade-in no-print">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-accent"></span>
              </span>
              Available for Internships & Developer Roles
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-sky-navy tracking-tight leading-none animate-fade-in animate-delay-100">
              Hi, I'm <span className="bg-gradient-to-r from-sky-accent to-sky-navy bg-clip-text text-transparent">Lithika Murugesan</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-sky-text max-w-2xl lg:mx-0 mx-auto animate-fade-in animate-delay-200">
              Recent Computer Science graduate specializing in full-stack development, backend services, and clean RESTful API architectures.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-sky-muted animate-fade-in animate-delay-200">
              <MapPin className="w-4 h-4 text-sky-accent" />
              <span>Erode, Tamil Nadu, India</span>
            </div>

            {/* CTA Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-fade-in animate-delay-300 no-print">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-sky-accent hover:bg-sky-navy rounded-xl transition-all shadow-md shadow-sky-accent/15 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-sky-navy bg-white border border-sky-border hover:bg-sky-bg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Talk
              </a>
              <a
                href="/resume.pdf"
                download="Lithika_Murugesan_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-sky-accent bg-sky-accent/10 hover:bg-sky-accent/15 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 animate-fade-in animate-delay-300 no-print">
              <a
                href="https://github.com/LithikaMurugesan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-sky-accent hover:text-white text-sky-text rounded-xl border border-sky-border shadow-sm transition-all flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/linkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-sky-accent hover:text-white text-sky-text rounded-xl border border-sky-border shadow-sm transition-all flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:lithika2404@gmail.com"
                className="p-3 bg-white hover:bg-sky-accent hover:text-white text-sky-text rounded-xl border border-sky-border shadow-sm transition-all flex items-center justify-center"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/LithikaMurugesan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-sky-accent hover:text-white text-sky-text rounded-xl border border-sky-border shadow-sm transition-all flex items-center justify-center font-bold"
                aria-label="LeetCode Profile"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center items-center animate-fade-in animate-delay-200">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-accent to-sky-navy opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative p-1.5 bg-gradient-to-br from-sky-accent/30 to-sky-navy/20 rounded-3xl shadow-2xl max-w-[300px] sm:max-w-[340px]">
                {/* Photo frame */}
                <div className="rounded-2xl overflow-hidden" style={{height: '380px', width: '100%'}}>
                  <img
                    src="/profile.png"
                    alt="Lithika Murugesan - Software Developer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block'
                    }}
                  />
                </div>
                
                {/* Name tag overlay */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-xl sky-card border border-sky-border shadow-lg text-xs font-bold text-sky-navy">
                  Lithika Murugesan · CSE Graduate
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-sky-border pt-12 text-center mt-16 animate-fade-in animate-delay-300">
          <div className="p-4">
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-sky-accent">400+</h3>
            <p className="text-xs sm:text-sm text-sky-muted uppercase tracking-widest mt-1 font-semibold">DSA Challenges Solved</p>
          </div>
          <div className="p-4">
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-sky-navy">1st</h3>
            <p className="text-xs sm:text-sm text-sky-muted uppercase tracking-widest mt-1 font-semibold">Hackathon Winner</p>
          </div>
          <div className="col-span-2 md:col-span-1 p-4">
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-sky-text">4+</h3>
            <p className="text-xs sm:text-sm text-sky-muted uppercase tracking-widest mt-1 font-semibold">Deployments Built</p>
          </div>
        </div>

      </div>
    </section>
  );
}
