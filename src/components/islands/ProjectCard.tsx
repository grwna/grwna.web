import * as React from 'react';
import { SiGithub } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <Card className="rounded-3xl bg-card border border-border hover:border-primary transition-all group overflow-hidden">
      <CardContent className="p-6 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-accent relative flex items-center justify-center border border-border">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          ) : (
            <div className="text-muted-foreground italic">No image available</div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge 
                  key={tag}
                  variant="outline"
                  className="px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-xs font-semibold border-border"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button variant="outline" className="gap-2 rounded-xl group-hover:bg-primary group-hover:text-primary-background transition-all">
                <SiGithub className="w-4 h-4" />
                <span>View on Github</span>
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
