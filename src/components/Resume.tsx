import { resumeData } from "@/data/resumeData";
import { TerminalPrompt } from "./TerminalPrompt";
import { CommandOutput } from "./CommandOutput";

export const ResumeSection = () => (
    <div className="space-y-4">
      <TerminalPrompt command="cat resume.txt" />
      <CommandOutput>
        <div className="border-l-2 border-terminal-green pl-4 space-y-2">
          <h2 className="text-xl text-terminal-green font-bold"># Resume</h2>
          <p className="text-terminal-cyan">Preview and download my latest resume</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1k9R9A_eAjQMAPIPgANe49QQZutV_Fyn4/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal-blue hover:text-terminal-cyan transition-colors"
            >
              <span>📄</span> Preview Resume
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1k9R9A_eAjQMAPIPgANe49QQZutV_Fyn4"
              download
              className="flex items-center gap-2 bg-terminal-green text-white px-4 py-2 rounded hover:bg-terminal-cyan transition-colors"
            >
              ⬇️ Download Resume
            </a>
          </div>
        </div>
      </CommandOutput>
    </div>
  );
  