import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg md:text-xl">01.</span>{" "}
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou um desenvolvedor full stack apaixonado por criar soluções
                tecnológicas que fazem a diferença. Com mais de{" "}
                <span className="text-primary">5 anos de experiência</span>,
                tenho trabalhado em projetos que vão desde startups até grandes
                empresas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Meu foco principal está no desenvolvimento de aplicações web
                modernas e escaláveis, utilizando as melhores práticas e
                tecnologias do mercado. Adoro resolver problemas complexos e
                transformar ideias em realidade.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Quando não estou codando, você pode me encontrar explorando
                novas tecnologias, contribuindo para projetos open source ou
                tomando um bom café.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">+50 Projetos</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Aplicações web desenvolvidas com sucesso
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">5+ Anos</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  De experiência em desenvolvimento
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Bacharel em SI</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Sistemas de Informação - Universidade
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
