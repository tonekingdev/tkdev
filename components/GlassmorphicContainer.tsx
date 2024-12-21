import React from "react";

interface GlassmorphicContainerProps {
    children: React.ReactNode
    className?: string
}

export function GlassmorphicContainer({ children, className = '' }: GlassmorphicContainerProps) {
    return (
        <div className={`bg-white/40 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg border border-primary/20 ${className}`}>
          {children}
        </div>
      )
}