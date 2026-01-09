import { GraduationCap, MapPin, Calendar, Coffee } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "AI & Data Science", value: "Student" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Calendar, label: "Experience", value: "Fresher" },
  { icon: Coffee, label: "Passion", value: "Full Stack Dev" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
          
          {/* Highlights grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="bg-card rounded-2xl p-5 text-center shadow-card border border-border hover-lift group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
          
          {/* About content */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a passionate <span className="text-primary font-medium">AI & Data Science student</span> with a strong foundation in full-stack development. 
                I specialize in building modern web applications using the <span className="text-primary font-medium">MERN stack</span> and have hands-on experience 
                with machine learning projects.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm eager to apply my technical skills in a professional environment 
                and contribute to innovative solutions that make an impact. Currently seeking opportunities to grow as a developer while leveraging my knowledge 
                in both AI/ML and web development to solve real-world problems.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">2+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">5+</p>
                  <p className="text-sm text-muted-foreground">Technologies</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">∞</p>
                  <p className="text-sm text-muted-foreground">Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
