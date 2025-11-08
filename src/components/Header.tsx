import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-xl text-foreground">WebLocal</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("exemplos")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Exemplos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Planos
            </button>
            <Button onClick={() => scrollToSection("contato")} size="sm">
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("exemplos")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Exemplos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Planos
              </button>
              <Button onClick={() => scrollToSection("contato")} size="sm" className="w-full">
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;