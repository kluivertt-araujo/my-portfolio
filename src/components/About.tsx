import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Users } from "lucide-react";

const About = () => {
  const { lang } = useLanguage();

  const cards = [
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: lang === "pt" ? "5+ Anos" : "5+ Years",
      desc:
        lang === "pt"
          ? "De experiência em desenvolvimento Full Stack"
          : "Of professional Full Stack experience",
      delay: 0.4,
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: lang === "pt" ? "Engenharia de Software" : "Software Engineering",
      desc:
        lang === "pt"
          ? "Formação sólida orientada a soluções"
          : "Solid solution-oriented background",
      delay: 0.5,
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: lang === "pt" ? "Instrutor TOTVS" : "TOTVS Instructor",
      desc:
        lang === "pt"
          ? "Especialista em PO-UI e capacitação técnica"
          : "PO-UI specialist and technical training",
      delay: 0.2,
    },
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      title: lang === "pt" ? "Integrações ERP" : "ERP Integrations",
      desc: "Datasul, Protheus, Fluig & Olist",
      delay: 0.3,
    },
  ];

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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Texto Principal */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "pt" ? (
                  <>
                    Sou{" "}
                    <span className="text-primary">
                      Desenvolvedor Full Stack
                    </span>
                    , especializado em Angular, Node.js, React e Po-ui, com
                    formação em Engenharia de Software e sólida experiência no
                    desenvolvimento de soluções robustas, escaláveis e
                    orientadas a negócio.
                  </>
                ) : (
                  <>
                    I am a{" "}
                    <span className="text-primary">Full Stack Developer</span>,
                    specialized in Angular, Node.js, React Po-ui, with a degree
                    in Software Engineering and solid experience in developing
                    robust, scalable, and business-oriented solutions.
                  </>
                )}
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "pt"
                  ? "Ao longo da minha trajetória, atuei diretamente na evolução de sistemas corporativos, liderando o desenvolvimento de backends performáticos, integrações com APIs externas e plataformas diversas, além da construção de interfaces ricas, intuitivas e funcionais. Possuo experiência prática em integrações com Olist, Datasul, Protheus e Fluig, sempre focando em qualidade, padronização e boas práticas."
                  : "Throughout my career, I have directly worked on the evolution of corporate systems, leading the development of high-performance backends, integrations with external APIs and diverse platforms, as well as building rich, intuitive, and functional interfaces. I have practical experience with Olist, Datasul, Protheus, and Fluig integrations, always focusing on quality, standardization, and best practices."}
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {lang === "pt"
                  ? "Além da atuação técnica, também sou instrutor de PO-UI na TOTVS, tendo capacitado profissionais de diferentes organizações incluindo equipes do COB (Comitê Olímpico Brasileiro)."
                  : "Beyond my technical role, I am also a PO-UI instructor at TOTVS, having trained professionals from various organizations including teams from the COB (Brazilian Olympic Committee)."}
              </p>
            </div>

            {/* Cards Empilhados (Um embaixo do outro) */}
            <div className="space-y-6">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay }}
                  className="bg-gradient-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
