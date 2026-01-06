import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    name: "NestJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    category: "Backend",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "Cloud",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    category: "Database",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TechStack = () => {
  const { lang } = useLanguage();
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-primary font-mono text-lg md:text-xl">
              02.
            </span>{" "}
            {lang === "pt" ? "Tecnologias" : "Technologies"}
          </h2>
          <p className="text-muted-foreground text-center mb-4">
            {lang === "pt"
              ? "Ferramentas que utilizo no dia a dia"
              : "Tools I use on a daily basis"}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex flex-col items-center gap-3 p-4 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 md:w-14 md:h-14 group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">
                    {tech.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
