import { Link } from "react-router-dom";
import { Flag, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">rFactor Racing League</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Liga portuguesa de corridas virtuais com as melhores competições de IndyCar e Stock Car.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/calendario" className="text-muted-foreground hover:text-primary transition-colors">
                  Calendário
                </Link>
              </li>
              <li>
                <Link to="/classificacoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Classificações
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/indycar" className="text-muted-foreground hover:text-primary transition-colors">
                  IndyCar 2020
                </Link>
              </li>
              <li>
                <Link to="/stockcar" className="text-muted-foreground hover:text-primary transition-colors">
                  Stock Car 2019
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Segue-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 rFactor Racing League. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
