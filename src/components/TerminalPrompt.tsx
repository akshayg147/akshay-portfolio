interface TerminalPromptProps {
  user?: string;
  host?: string;
  path?: string;
  command?: string;
  showCursor?: boolean;
}

export const TerminalPrompt = ({ 
  user = "akshay", 
  host = "portfolio", 
  path = "~",
  command = "",
  showCursor = true 
}: TerminalPromptProps) => {
  return (
    <div className="flex items-center gap-1 font-mono">
      <span className="text-terminal-green">{user}@{host}</span>
      <span className="text-foreground">:</span>
      <span className="text-terminal-blue">{path}</span>
      <span className="text-foreground">$</span>
      <span className="text-foreground ml-2">{command}</span>
      {showCursor && <span className="animate-pulse text-terminal-green">█</span>}
    </div>
  );
};