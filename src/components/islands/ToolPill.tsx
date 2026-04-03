import * as React from 'react';
import { Wrench } from 'lucide-react';
import { 
  SiPython, 
  SiC, 
  SiCplusplus, 
  SiHtml5, 
  SiCss,
  SiReact, 
  SiNextdotjs, 
  SiDocker, 
  SiLinux,
  SiGithub
} from 'react-icons/si';
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.FC<any>> = {
  Python: SiPython,
  C: SiC,
  Cpp: SiCplusplus,
  Html5: SiHtml5,
  Css3: SiCss,
  React: SiReact,
  NextJS: SiNextdotjs,
  Docker: SiDocker,
  Github: SiGithub,
  Linux: SiLinux
};

interface ToolPillProps {
  name: string;
  icon: string;
}

export const ToolPill: React.FC<ToolPillProps> = ({ name, icon }) => {
  const Icon = iconMap[icon];

  return (
    <Badge 
      variant="outline" 
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-accent hover:bg-primary hover:text-primary-foreground transition-all group border border-border cursor-default hover:shadow-md"
    >
      {Icon ? (
        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
      ) : (
        <Wrench className="w-5 h-5" />
      )}
      <span className="font-bold text-sm tracking-tight">{name}</span>
    </Badge>
  );
};
