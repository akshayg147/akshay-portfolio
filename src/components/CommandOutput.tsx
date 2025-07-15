import { ReactNode } from "react";

interface CommandOutputProps {
  children: ReactNode;
  delay?: number;
}

export const CommandOutput = ({ children, delay = 0 }: CommandOutputProps) => {
  return (
    <div 
      className="mt-2 text-foreground animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};