import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Full Stack Development Intern
                </h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Gained hands-on experience in developing web applications using modern technologies. 
                  Collaborated with team members on various projects, contributing to both frontend 
                  and backend development. Enhanced skills in React, Node.js, and database management 
                  while working on real-world applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
