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
      className={`w-full py-16 md:py-24 box-border ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
