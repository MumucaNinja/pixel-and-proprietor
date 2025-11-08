import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">W</span>
              </div>
              <span className="font-bold text-xl">WebLocal</span>
            </div>
            <p className="text-background/80 mb-4">
              Sites profissionais para pequenos comércios locais. Transforme sua presença online.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("beneficios");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("exemplos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Exemplos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("sobre");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("planos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Planos
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-background/60" />
                <span className="text-background/80">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-background/60" />
                <a
                  href="mailto:contato@weblocal.com.br"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  contato@weblocal.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} WebLocal. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;