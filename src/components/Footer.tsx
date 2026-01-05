import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="py-8 border-t border-border bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>por Kluivertt</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:lucas.silva@email.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Lucas Silva
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;