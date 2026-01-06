import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const { lang } = useLanguage();

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
            <span className="text-primary font-mono text-lg md:text-xl">
              01.
            </span>{" "}
            {lang === "pt" ? "Sobre mim" : "About me"}
          </h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "pt" ? (
                  <>
                    Sou um desenvolvedor full stack apaixonado por criar
                    soluções tecnológicas que fazem a diferença. Com mais de{" "}
                    <span className="text-primary">5 anos de experiência</span>,
                    tenho trabalhado em projetos que vão desde startups até
                    grandes empresas.
                  </>
                ) : (
                  <>
                    I am a full stack developer passionate about creating
                    technological solutions that make a difference. With over{" "}
                    <span className="text-primary">5 years of experience</span>,
                    I have worked on projects ranging from startups to large
                    corporations.
                  </>
                )}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "pt"
                  ? "Meu foco principal está no desenvolvimento de aplicações web modernas e escaláveis, utilizando as melhores práticas e tecnologias do mercado. Adoro resolver problemas complexos e transformar ideias em realidade."
                  : "My main focus is on developing modern and scalable web applications, using market-leading best practices and technologies. I love solving complex problems and turning ideas into reality."}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "pt"
                  ? "Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source ou tomando um bom café."
                  : "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee."}
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
                  <h3 className="font-semibold text-lg">
                    {lang === "pt" ? "+50 Projetos" : "+50 Projects"}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {lang === "pt"
                    ? "Aplicações web desenvolvidas com sucesso"
                    : "Web applications successfully developed"}
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
                  <h3 className="font-semibold text-lg">
                    {lang === "pt" ? "5+ Anos" : "5+ Years"}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {lang === "pt"
                    ? "De experiência em desenvolvimento"
                    : "Of development experience"}
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
                  <h3 className="font-semibold text-lg">
                    {lang === "pt" ? "Bacharel em SI" : "B.S. in Info Systems"}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {lang === "pt"
                    ? "Engenharia de Software - UNIP"
                    : "Software Engineering - UNIP"}
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
