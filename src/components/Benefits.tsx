import { Card } from "@/components/ui/card";
import { Users, Zap, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Mais Clientes",
    description: "Aumente sua visibilidade e alcance novos clientes pela internet.",
  },
  {
    icon: Sparkles,
    title: "Presença Online",
    description: "Tenha um site profissional que passa credibilidade ao seu negócio.",
  },
  {
    icon: Zap,
    title: "Site Rápido",
    description: "Páginas que carregam rapidamente em qualquer dispositivo.",
  },
  {
    icon: TrendingUp,
    title: "Design Moderno",
    description: "Visual atrativo e profissional que converte visitantes em clientes.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que ter um site?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme seu negócio local em uma referência online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;