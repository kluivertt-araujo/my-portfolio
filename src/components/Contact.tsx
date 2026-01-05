import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg md:text-xl">
              04.
            </span>{" "}
            Contato
          </h2>
          <p className="text-muted-foreground mb-4">Vamos trabalhar juntos?</p>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Se você tem uma ideia em mente ou quer apenas dizer oi, fique à
            vontade para entrar em contato!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="text-left space-y-6"
            >
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
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground mb-4">
                  Disponível para projetos freelance e oportunidades full-time.
                </p>
                <Button size="lg" className="glow" asChild>
                  <a href="mailto:kluiverttaraujo@outlook.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Email
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
              className="space-y-4 text-left"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <Input
                  placeholder="Seu nome"
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
