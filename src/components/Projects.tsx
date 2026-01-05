import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, gateway de pagamento e sistema de gestão de estoque. Arquitetura de microsserviços para alta escalabilidade.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos, relatórios automatizados e integração com múltiplas fontes de dados.",
    technologies: ["Angular", "NestJS", "MongoDB", "WebSocket"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Aplicação de gerenciamento de tarefas com recursos de colaboração em equipe, notificações em tempo real e integração com ferramentas populares.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
];

const otherProjects = [
  {
    title: "API Gateway",
    description:
      "Gateway de API com rate limiting, autenticação JWT e logging centralizado.",
    technologies: ["Node.js", "Express", "Redis"],
    github: "https://github.com",
  },
  {
    title: "Chat em Tempo Real",
    description:
      "Sistema de chat com WebSockets, suporte a grupos e compartilhamento de arquivos.",
    technologies: ["React", "Socket.io", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "CLI de Automação",
    description:
      "Ferramenta de linha de comando para automação de deploys e gestão de containers.",
    technologies: ["Node.js", "Docker", "TypeScript"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary font-mono text-lg md:text-xl">
              03.
            </span>{" "}
            Projetos
          </h2>
          <p className="text-muted-foreground text-center mb-4">
            Alguns trabalhos que desenvolvi
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          {/* Featured Projects – Conversation Style */}
          <div className="space-y-16 mb-24">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Bubble */}
                  <div
                    className={`max-w-full md:max-w-[75%] bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg relative`}
                  >
                    {/* Small accent (chat feeling) */}
                    <span
                      className={`absolute top-4 ${
                        isLeft ? "-left-2" : "-right-2"
                      } w-4 h-4 bg-card border-l border-t border-border rotate-45`}
                    />

                    <p className="text-primary font-mono text-sm mb-2">
                      Projeto em Destaque
                    </p>

                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-6 font-mono text-sm text-muted-foreground">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold text-center mb-10">
            Outros Projetos Notáveis
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="w-8 h-8 text-primary" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais no GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
