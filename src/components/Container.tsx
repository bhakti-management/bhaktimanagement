import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({ children, className = '', style }: ContainerProps) {
  return (
    <div 
      className={`w-full max-w-7xl mx-auto px-6 box-border ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
