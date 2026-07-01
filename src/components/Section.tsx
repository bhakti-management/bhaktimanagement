import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export default function Section({ children, className = '', style, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={`w-full py-10 md:py-14 lg:py-16 box-border ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
