import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-300 transform group ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 px-2.5 py-1 text-[11px] font-bold text-white bg-slate-900/90 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
        Back to Top
      </span>

      {/* Button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-sky-border hover:bg-sky-accent hover:text-white text-sky-accent shadow-lg shadow-sky-accent/10 hover:shadow-sky-accent/25 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
