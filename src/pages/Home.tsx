import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Trophy, Users, Image as ImageIcon } from "lucide-react";
import heroImage from "@/assets/hero-racing.jpg";
import indyCarImage from "@/assets/indy-car.jpg";
import stockCarImage from "@/assets/stock-car.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            rFactor Racing League
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Competições virtuais de alto nível com IndyCar 2020 e Stock Car 2019
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/calendario">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Ver Calendário
              </Button>
            </Link>
            <Link to="/classificacoes">
              <Button size="lg" variant="secondary">
                Classificações
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Categorias</h2>
            <p className="text-xl text-muted-foreground">
              Duas categorias emocionantes para pilotos de todos os níveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* IndyCar 2020 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={indyCarImage} 
                  alt="IndyCar 2020" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-foreground">IndyCar 2020</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base">
                  Monolugares de alta velocidade em circuitos ovais e mistos. Aerodinâmica avançada e corridas emocionantes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/indycar">
                  <Button className="w-full" variant="outline">
                    Ver Categoria
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Stock Car 2019 */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={stockCarImage} 
                  alt="Stock Car 2019" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-foreground">Stock Car 2019</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base">
                  Carros de turismo potentes em circuitos desafiantes. Contacto roda-a-roda e ultrapassagens espetaculares.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/stockcar">
                  <Button className="w-full" variant="outline">
                    Ver Categoria
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secções Rápidas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/calendario" className="group">
              <Card className="text-center hover:shadow-lg transition-all hover:border-primary cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Calendário</CardTitle>
                  <CardDescription>
                    Consulta todas as provas e horários das competições
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/classificacoes" className="group">
              <Card className="text-center hover:shadow-lg transition-all hover:border-primary cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Classificações</CardTitle>
                  <CardDescription>
                    Acompanha as classificações de pilotos e equipas
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/multimedia" className="group">
              <Card className="text-center hover:shadow-lg transition-all hover:border-primary cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <ImageIcon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Multimédia</CardTitle>
                  <CardDescription>
                    Galeria de fotos e vídeos das melhores corridas
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/contacto" className="group">
              <Card className="text-center hover:shadow-lg transition-all hover:border-primary cursor-pointer">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Inscreve-te</CardTitle>
                  <CardDescription>
                    Junta-te à nossa comunidade de pilotos
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
