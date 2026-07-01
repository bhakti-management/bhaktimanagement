import React from 'react';

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-slate-200 py-1.5 md:py-2 px-6 box-border">
      <div className="w-full max-w-7xl mx-auto flex flex-row justify-between items-center text-[12px] md:text-[13px] font-medium text-slate-700 font-sans">
        {/* Left Contacts */}
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-start">
          <a href="tel:+919925242929" className="flex items-center gap-1.5 text-slate-700 hover:text-brand-gold no-underline transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.62c0 1.042.133 2.052.382 3.016a11.953 11.953 0 005.159 5.159c.964.25 1.974.383 3.016.383h.027c.504 0 .996-.118 1.44-.343l1.921-1.002a2.25 2.25 0 001.21-2.02V10.5c0-.695-.424-1.328-1.077-1.602l-2.67-1.115a2.25 2.25 0 00-2.31.426l-1.121 1.121A15.03 15.03 0 017.5 7.5l1.121-1.121a2.25 2.25 0 00.426-2.31l-1.115-2.67A2.25 2.25 0 006.62 1.5H5.25a2.25 2.25 0 00-2.25 2.25v1.372z" />
            </svg>
            <span>+91-9925242929</span>
          </a>

          <a href="mailto:hr@bhaktimanagement.com" className="flex items-center gap-1.5 text-slate-700 hover:text-brand-gold no-underline transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>hr@bhaktimanagement.com</span>
          </a>
        </div>

        {/* Right Tagline - Hidden on mobile/tablet to avoid overflow */}
        <div className="hidden lg:block tracking-wide text-slate-500 font-normal">
          Building India's Workforce Since 1998
        </div>
      </div>
    </div>
  );
}