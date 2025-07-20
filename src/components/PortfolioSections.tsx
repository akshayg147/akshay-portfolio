import { resumeData } from "@/data/resumeData";
import { TerminalPrompt } from "./TerminalPrompt";
import { CommandOutput } from "./CommandOutput";
import { ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react";

export const AboutSection = () => (
  <div className="space-y-4">
    <TerminalPrompt command="cat about.txt" />
    <CommandOutput>
      <div className="border-l-2 border-terminal-green pl-4 space-y-2">
        <h2 className="text-xl text-terminal-green font-bold"># {resumeData.personal.name}</h2>
        <p className="text-terminal-cyan">Software Engineer and Full Stack Developer</p>
        <p className="text-muted-foreground">
          Passionate software engineer with expertise in cloud technologies, microservices architecture, 
          and full-stack development. Currently working at Sprinklr, building scalable cloud solutions 
          across AWS, Azure, and GCP.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-2 text-terminal-blue hover:text-terminal-cyan transition-colors">
            <Mail size={16} />
            {resumeData.personal.email}
          </a>
          <a href={`tel:${resumeData.personal.phone}`} className="flex items-center gap-2 text-terminal-blue hover:text-terminal-cyan transition-colors">
            <Phone size={16} />
            {resumeData.personal.phone}
          </a>
          <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-terminal-blue hover:text-terminal-cyan transition-colors">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-terminal-blue hover:text-terminal-cyan transition-colors">
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </CommandOutput>
  </div>
);

export const SkillsSection = () => (
  <div className="space-y-4">
    <TerminalPrompt command="ls -la skills/" />
    <CommandOutput>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-terminal-yellow font-bold mb-2">📋 Languages</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.languages.map((lang) => (
              <span key={lang} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-terminal-yellow font-bold mb-2">🚀 Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.frameworks.map((framework) => (
              <span key={framework} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                {framework}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-terminal-yellow font-bold mb-2">🗄️ Databases</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.databases.map((db) => (
              <span key={db} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                {db}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-terminal-yellow font-bold mb-2">☁️ Cloud/DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.cloudDevOps.map((tool) => (
              <span key={tool} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CommandOutput>
  </div>
);

export const ExperienceSection = () => (
  <div className="space-y-4">
    <TerminalPrompt command="cat experience.log" />
    <CommandOutput>
      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-terminal-blue pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-terminal-green font-bold">{exp.title}</h3>
              <span className="text-terminal-cyan text-sm">{exp.duration}</span>
            </div>
            <p className="text-terminal-yellow mb-2">{exp.company} • {exp.type}</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {exp.achievements.map((achievement, achieveIndex) => (
                <li key={achieveIndex} className="text-sm leading-relaxed">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CommandOutput>
  </div>
);

export const ProjectsSection = () => (
  <div className="space-y-4">
    <TerminalPrompt command="find projects/ -name '*.md' -exec cat {} \;" />
    <CommandOutput>
      <div className="space-y-6">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="border border-border rounded p-4 bg-card">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <h3 className="text-terminal-green font-bold text-lg">{project.name}</h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-terminal-blue hover:text-terminal-cyan transition-colors text-sm"
              >
                <Github size={16} />
                View Code
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex} className="text-sm leading-relaxed">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CommandOutput>
  </div>
);

export const EducationSection = () => (
  <div className="space-y-4">
    <TerminalPrompt command="head -n 20 education.txt" />
    <CommandOutput>
      <div className="border-l-2 border-terminal-purple pl-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 className="text-terminal-green font-bold">{resumeData.education.institution}</h3>
          <span className="text-terminal-cyan text-sm">{resumeData.education.location}</span>
        </div>
        <p className="text-terminal-yellow mb-1">{resumeData.education.degree}</p>
        <div className="flex gap-4 text-sm">
          <span className="text-muted-foreground">CGPA: <span className="text-terminal-green">{resumeData.education.cgpa}</span></span>
          <span className="text-muted-foreground">Duration: <span className="text-terminal-blue">{resumeData.education.duration}</span></span>
        </div>
      </div>
    </CommandOutput>
  </div>
);