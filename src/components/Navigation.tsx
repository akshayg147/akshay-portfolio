interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const menuItems = [
    { id: "about", label: "about.txt", command: "cat" },
    { id: "skills", label: "skills/", command: "ls" },
    { id: "experience", label: "experience.log", command: "cat" },
    { id: "projects", label: "projects/", command: "find" },
    { id: "education", label: "education.txt", command: "head" },
    { id: "chat", label: "resume-assistant", command: "./run" },
    { id: "resume", label: "View/Download resume", command: "./Resume" }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="text-terminal-green font-bold mb-3 flex items-center gap-2">
        <span>📁</span>
        <span>akshay@portfolio:~$</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`p-2 rounded text-left text-sm transition-all duration-200 ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <div className="font-mono">
              <div className="text-xs text-terminal-cyan">{item.command}</div>
              <div className="font-bold">{item.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};