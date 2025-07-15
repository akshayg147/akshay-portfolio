import { useState } from "react";
import { TerminalWindow } from "./TerminalWindow";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare } from "lucide-react";
import { resumeData } from "@/data/resumeData";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const getResumeAnswer = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  // Personal info questions
  if (lowerQuestion.includes("name")) {
    return `My name is ${resumeData.personal.name}.`;
  }
  
  if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("phone")) {
    return `You can reach me at:\n📧 Email: ${resumeData.personal.email}\n📱 Phone: ${resumeData.personal.phone}\n💼 LinkedIn: ${resumeData.personal.linkedin}\n🐙 GitHub: ${resumeData.personal.github}`;
  }
  
  // Education questions
  if (lowerQuestion.includes("education") || lowerQuestion.includes("college") || lowerQuestion.includes("university") || lowerQuestion.includes("cgpa")) {
    return `I graduated from ${resumeData.education.institution} with a ${resumeData.education.degree}. I maintained a CGPA of ${resumeData.education.cgpa} during ${resumeData.education.duration}.`;
  }
  
  // Skills questions
  if (lowerQuestion.includes("skills") || lowerQuestion.includes("technology") || lowerQuestion.includes("programming")) {
    return `My technical skills include:\n\n🔧 Languages: ${resumeData.skills.languages.join(", ")}\n🚀 Frameworks: ${resumeData.skills.frameworks.join(", ")}\n🗄️ Databases: ${resumeData.skills.databases.join(", ")}\n☁️ Cloud/DevOps: ${resumeData.skills.cloudDevOps.join(", ")}\n🛠️ Tools: ${resumeData.skills.tools.join(", ")}`;
  }
  
  if (lowerQuestion.includes("cloud") || lowerQuestion.includes("aws") || lowerQuestion.includes("azure") || lowerQuestion.includes("gcp")) {
    return `I have extensive cloud experience with AWS, Azure, and GCP. At Sprinklr, I built cross-cloud solutions, implemented Kubernetes clusters, and developed Python SDKs for secure cross-cloud function execution using IAM role-based access.`;
  }
  
  // Experience questions
  if (lowerQuestion.includes("experience") || lowerQuestion.includes("work") || lowerQuestion.includes("job") || lowerQuestion.includes("sprinklr")) {
    return `I'm currently working as an Associate Cloud Engineer at Sprinklr since July 2024. Previously, I was an intern there and also worked as a Software Developer Intern at Alemeno. My experience includes building microservices, CI/CD pipelines, and cloud infrastructure across AWS, Azure, and GCP.`;
  }
  
  if (lowerQuestion.includes("current") || lowerQuestion.includes("now") || lowerQuestion.includes("present")) {
    return `I'm currently working as an Associate Cloud Engineer at Sprinklr, where I build Node.js backends, develop Python SDKs for cross-cloud operations, and design microservices architectures handling 500+ RPM with <100ms latency.`;
  }
  
  // Projects questions
  if (lowerQuestion.includes("project") || lowerQuestion.includes("github") || lowerQuestion.includes("redis") || lowerQuestion.includes("socialgram") || lowerQuestion.includes("whatstube")) {
    return `I've built several impressive projects:\n\n🔴 Mini Redis: A Redis-like in-memory database with RDB persistence and master-slave replication\n📱 SOCIALGRAM: A full-stack Facebook clone with Django, including real-time features and content recommendation\n🤖 WhatsTube Bot: A WhatsApp bot for YouTube video downloads using Node.js and AWS S3\n\nAll projects are available on my GitHub!`;
  }
  
  // Achievements questions
  if (lowerQuestion.includes("achievement") || lowerQuestion.includes("accomplishment")) {
    return `Some key achievements:\n• Reduced CI/CD release cycles from 2 days to 4 hours\n• Improved team response time by 30% with automated alerting\n• Achieved 10x performance improvement with async processing\n• Built API gateway handling 500+ RPM with <100ms latency\n• Maintained 95% response quality in automated systems`;
  }
  
  // General questions
  if (lowerQuestion.includes("tell me about") || lowerQuestion.includes("who are you")) {
    return `I'm ${resumeData.personal.name}, a passionate Cloud Engineer and Full-Stack Developer. I specialize in building scalable cloud solutions, microservices architecture, and have extensive experience with AWS, Azure, and GCP. Currently working at Sprinklr, I focus on creating efficient, high-performance systems that solve real-world problems.`;
  }
  
  // Default response
  return `I'd be happy to help! You can ask me about:\n• My technical skills and experience\n• My education and background\n• My projects (Mini Redis, SOCIALGRAM, WhatsTube Bot)\n• My work at Sprinklr and previous internships\n• My contact information\n• My achievements and accomplishments\n\nWhat would you like to know?`;
};

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Akshay's AI assistant. Ask me anything about his resume, experience, projects, or skills! 🚀",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResumeAnswer(input);
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <TerminalWindow title="akshay@portfolio:~/resume-assistant">
      <div className="h-96 flex flex-col">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
          <MessageSquare className="text-terminal-green" size={20} />
          <span className="text-terminal-green font-bold">Resume Assistant</span>
          <span className="text-terminal-cyan text-sm">AI-powered</span>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-sm font-bold ${
                  message.role === "user" ? "text-terminal-blue" : "text-terminal-green"
                }`}>
                  {message.role === "user" ? "user@terminal" : "akshay-ai"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <div className={`p-3 rounded-lg ${
                message.role === "user" 
                  ? "bg-secondary ml-8" 
                  : "bg-card border border-border mr-8"
              }`}>
                <pre className="whitespace-pre-wrap text-sm font-mono">{message.content}</pre>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-center gap-2 text-terminal-green">
              <span className="text-sm font-bold">akshay-ai</span>
              <span className="text-sm">is typing</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-terminal-green rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-1 h-1 bg-terminal-green rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about Akshay's resume..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="bg-input text-foreground border-border"
          />
          <Button onClick={handleSend} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Send size={16} />
          </Button>
        </div>
      </div>
    </TerminalWindow>
  );
};