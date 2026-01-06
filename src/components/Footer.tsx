import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>{lang === "pt" ? "Feito com" : "Built with"}</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>{lang === "pt" ? "por Kluivertt" : "by Kluivertt"}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kluivertt-araujo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kluivertt-araujo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kluiverttaraujo@outlook.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Kluivertt Araujo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
