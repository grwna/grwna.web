import * as React from 'react';
import { Briefcase, Building, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, period, description }) => {
  return (
    <Card className="rounded-2xl bg-card border border-border hover:border-primary transition-all relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Briefcase className="w-16 h-16" />
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">{role}</h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-accent px-3 py-1 rounded-full w-fit border border-border">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 text-primary font-medium">
          <Building className="w-4 h-4" />
          <span>{company}</span>
        </div>

        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/20 pl-4 py-1">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
