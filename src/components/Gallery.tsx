import galleryClothing from "@/assets/gallery-clothing.jpg";
import galleryBarbershop from "@/assets/gallery-barbershop.jpg";
import galleryGym from "@/assets/gallery-gym.jpg";
import galleryRestaurant from "@/assets/gallery-restaurant.jpg";

const examples = [
  {
    image: galleryClothing,
    title: "Loja de Roupas",
    description: "E-commerce elegante com catálogo de produtos",
  },
  {
    image: galleryBarbershop,
    title: "Barbearia",
    description: "Sistema de agendamento online integrado",
  },
  {
    image: galleryGym,
    title: "Academia",
    description: "Planos, horários e área de membros",
  },
  {
    image: galleryRestaurant,
    title: "Pizzaria",
    description: "Cardápio online com sistema de pedidos",
  },
];

const Gallery = () => {
  return (
    <section id="exemplos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sites que criamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja exemplos de sites modernos e funcionais para diferentes tipos de negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-2">{example.title}</h3>
                  <p className="text-primary-foreground/90">{example.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;