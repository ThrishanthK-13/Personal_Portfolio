import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden pt-16">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Profile photo with glow effect */}
          <div className="mb-8 animate-fade-up relative inline-block">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110 animate-pulse-glow" />
            <img
              src={profilePhoto}
              alt="Thrishanth K"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover mx-auto border-4 border-primary/30 shadow-glow relative z-10"
            />
          </div>
          
          {/* Badge */}
          <div className="animate-fade-up-delay-1 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sparkles size={14} className="animate-pulse" />
              Open to opportunities
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-up-delay-1">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Thrishanth K</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up-delay-2">
            AI & Data Science Student
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-10 animate-fade-up-delay-2">
            Full Stack Developer crafting modern web experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <Button asChild size="lg" className="gap-2 shadow-glow hover-lift px-8">
              <a href="#projects">
                View Projects
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 hover-lift glass">
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
