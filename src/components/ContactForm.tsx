import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solicite seu site agora
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e entraremos em contato em até 24 horas
            </p>
          </div>

          <Card className="p-8 md:p-10 bg-card border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-card-foreground">
                  Nome completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-card-foreground">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-card-foreground">
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="business" className="text-card-foreground">
                  Tipo de negócio
                </Label>
                <Input
                  id="business"
                  name="business"
                  placeholder="Ex: Barbearia, Loja de roupas, etc."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-card-foreground">
                  Conte um pouco sobre seu projeto
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Descreva o que você precisa para o seu site..."
                  className="mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitação"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Ao enviar, você concorda com nossos termos de serviço
              </p>
            </form>
          </Card>

          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <p className="text-muted-foreground mb-4">Ou entre em contato diretamente:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                📱 WhatsApp: (11) 99999-9999
              </a>
              <a
                href="mailto:contato@weblocal.com.br"
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                ✉️ contato@weblocal.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;