import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
  "Sites responsivos que funcionam em todos os dispositivos",
  "Design personalizado para seu tipo de negócio",
  "Entrega rápida em até 7 dias úteis",
  "Suporte técnico após a entrega",
  "Integração com redes sociais e WhatsApp",
  "Otimização para Google (SEO básico incluído)",
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nosso serviço é acessível, rápido e personalizado para o seu negócio
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Somos especializados em criar sites profissionais para pequenos comércios locais.
                Entendemos que cada negócio é único e merece um site que reflita sua identidade
                e atraia os clientes certos.
              </p>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Check className="text-primary" size={16} />
                    </div>
                    <p className="text-card-foreground text-lg m-0">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-card-foreground font-medium text-lg m-0">
                  💡 <strong>Diferencial:</strong> Não usamos templates prontos. Cada site é
                  desenvolvido do zero, pensado especialmente para o seu tipo de comércio e seu
                  público-alvo.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;