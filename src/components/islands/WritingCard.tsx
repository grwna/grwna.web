import * as React from 'react';
import { FileText, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WritingCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const WritingCard: React.FC<WritingCardProps> = ({ title, description, tags, link }) => {
  return (
    <Card className="rounded-3xl bg-card border border-border hover:border-primary transition-all group overflow-hidden relative">
      <CardContent className="p-8">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant={ (tag === 'Bahasa Indonesia' || tag === 'English') ? "default" : "secondary" }
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    (tag === 'Bahasa Indonesia' || tag === 'English') 
                      ? 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30' 
                      : 'bg-accent text-accent-foreground border border-border'
                  }`}
                >
                  {(tag === 'Bahasa Indonesia' || tag === 'English') && <Languages className="w-3.5 h-3.5" />}
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button className="gap-2.5 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all px-8 py-6 font-bold">
                <FileText className="w-5 h-5" />
                <span>Read Full Piece</span>
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
