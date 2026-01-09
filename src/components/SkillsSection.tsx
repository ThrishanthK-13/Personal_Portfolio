import { Code2, Database, Layout, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "SQL Server", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Layout,
    title: "Full Stack",
    skills: ["MERN Stack", "Git", "Responsive Design"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & ML",
    skills: ["Machine Learning Basics", "Python", "Data Analysis"],
    color: "from-orange-500 to-red-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
