import * as React from 'react';
import { Shield, Cpu, Code2, type LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Cpu,
  Code2
};

interface SkillCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, description, tags, icon }) => {
  const Icon = iconMap[icon] || Code2;

  return (
    <Card className="rounded-2xl bg-card border border-border hover:border-primary transition-all group overflow-hidden">
      <CardHeader className="pb-2">
        <div className="mb-4 p-3 rounded-xl bg-accent w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag}
              variant="secondary"
              className="rounded-full px-3 py-0.5 text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
