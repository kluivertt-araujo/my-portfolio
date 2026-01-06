import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

const Contact = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg md:text-xl">
              04.
            </span>{" "}
            {lang === "pt" ? "Contato" : "Contact"}
          </h2>
          <p className="text-muted-foreground mb-4">
            {lang === "pt" ? "Vamos trabalhar juntos?" : "Let's work together?"}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            {lang === "pt"
              ? "Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia em mente ou quer apenas dizer oi, fique à vontade para entrar em contato!"
              : "I'm always open to new opportunities and interesting projects. If you have an idea in mind or just want to say hi, feel free to get in touch!"}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-left space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {lang === "pt" ? "Telefone" : "Phone"}
                  </p>
                  <a
                    href="tel:+5511947570893"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +55 (11) 94757-0893
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:kluiverttaraujo@outlook.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    kluiverttaraujo@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {lang === "pt" ? "Localização" : "Location"}
                  </p>
                  <p className="text-foreground">
                    {lang === "pt" ? "São Paulo, Brasil" : "São Paulo, Brazil"}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="pt-4">
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
                {lang === "pt"
                  ? "Sempre aberto a novas conexões e conversas interessantes."
                  : "Always open to new connections and interesting conversations."}
              </p>
              <Button size="lg" className="glow" asChild>
                <a href="mailto:kluiverttaraujo@outlook.com">
                  <Mail className="mr-2 h-4 w-4" />
                  {lang === "pt" ? "Enviar Email" : "Send Email"}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
