import { MessageCircle, TrendingUp } from "lucide-react";

const projects = [
  {
    icon: MessageCircle,
    title: "Convyx",
    description:
      "A one-to-one real-time chat application built with the MERN stack. Features include instant messaging, voice chat with audio recording, user authentication, and real-time updates using WebSocket technology.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "WebRTC"],
    gradient: "from-blue-600 to-purple-600",
    bgGradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: TrendingUp,
    title: "SmartPrice",
    description:
      "ML-based fruit and vegetable price prediction system using image analysis. Leverages machine learning algorithms to analyze produce images and predict market prices accurately.",
    tech: ["Python", "Machine Learning", "Image Processing", "TensorFlow"],
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border overflow-hidden hover-lift`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
