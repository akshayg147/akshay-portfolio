import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = "Terminal", children, className = "" }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-button terminal-red"></div>
        <div className="terminal-button terminal-yellow"></div>
        <div className="terminal-button terminal-green"></div>
        <span className="text-muted-foreground text-sm ml-4">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};