import { useState, useEffect } from "react";
import { TerminalWindow } from "@/components/TerminalWindow";
import { Navigation } from "@/components/Navigation";
import { ResumeSection } from "@/components/Resume";
import { AboutSection, SkillsSection, ExperienceSection, ProjectsSection, EducationSection } from "@/components/PortfolioSections";
import { ChatBot } from "@/components/ChatBot";
import { TerminalPrompt } from "@/components/TerminalPrompt";
import { resumeData } from "@/data/resumeData";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "education":
        return <EducationSection />;
      case "chat":
        return <ChatBot />;
      case "resume":
          return <ResumeSection />;
      default:
        return <AboutSection />;
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-terminal-green font-mono">
          <TerminalPrompt command="booting..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl font-bold text-terminal-green mb-2 typing-animation">
              {resumeData.personal.name}
            </h1>
            <div className="text-terminal-cyan text-lg md:text-xl mb-4">
              <TerminalPrompt 
                command="whoami" 
                showCursor={false}
              />
              <div className="mt-2 text-muted-foreground">
                Software Engineer
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />

        {/* Content */}
        <TerminalWindow title={`akshay@portfolio:~/${activeSection}`}>
          {renderSection()}
        </TerminalWindow>

        {/* Footer */}
        <div className="text-center mt-8 text-muted-foreground text-sm">
          <TerminalPrompt 
            command="echo 'Built with React + TypeScript + Tailwind CSS'" 
            showCursor={false}
          />
          <div className="mt-2">
            © 2024 {resumeData.personal.name} • Terminal Portfolio v1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
