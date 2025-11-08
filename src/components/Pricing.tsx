import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 897",
    description: "Ideal para começar sua presença online",
    features: [
      "Site de 1 página (Landing Page)",
      "Design responsivo",
      "Formulário de contato",
      "Integração com WhatsApp",
      "1 revisão incluída",
      "Entrega em 5 dias úteis",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 1.497",
    description: "O mais escolhido pelos nossos clientes",
    features: [
      "Site com até 5 páginas",
      "Design responsivo premium",
      "Formulário de contato avançado",
      "Integração com redes sociais",
      "Galeria de fotos/produtos",
      "SEO otimizado",
      "3 revisões incluídas",
      "Entrega em 7 dias úteis",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "R$ 2.497",
    description: "Solução completa para seu negócio",
    features: [
      "Site com até 10 páginas",
      "Design responsivo premium",
      "Sistema de agendamento online",
      "Área de membros/clientes",
      "Blog integrado",
      "SEO avançado",
      "E-mail profissional incluído",
      "Revisões ilimitadas",
      "Entrega em 10 dias úteis",
      "3 meses de suporte grátis",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Investimento único, sem mensalidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative hover:shadow-xl transition-all duration-300 animate-fade-in ${
                plan.highlighted
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    <span className="text-card-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                variant={plan.highlighted ? "hero" : "default"}
                className="w-full"
                size="lg"
              >
                Solicitar Orçamento
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-muted-foreground">
            💳 <strong>Formas de pagamento:</strong> PIX, cartão de crédito ou transferência bancária
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;