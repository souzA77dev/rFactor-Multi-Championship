import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Video, Play } from "lucide-react";
import heroImage from "@/assets/hero-racing.jpg";
import indyCarImage from "@/assets/indy-car.jpg";
import stockCarImage from "@/assets/stock-car.jpg";

const Multimedia = () => {
  const galleries = [
    { 
      title: "GP de Indianapolis", 
      category: "IndyCar", 
      images: 24, 
      date: "15 Mar 2024",
      thumbnail: indyCarImage
    },
    { 
      title: "Etapa de Interlagos", 
      category: "Stock Car", 
      images: 32, 
      date: "18 Mar 2024",
      thumbnail: stockCarImage
    },
    { 
      title: "GP de Texas", 
      category: "IndyCar", 
      images: 28, 
      date: "22 Mar 2024",
      thumbnail: heroImage
    },
  ];

  const videos = [
    {
      title: "Highlights GP de Indianapolis",
      category: "IndyCar",
      duration: "5:32",
      views: "1.2K",
      date: "15 Mar 2024",
    },
    {
      title: "Melhores Momentos Etapa Interlagos",
      category: "Stock Car",
      duration: "6:15",
      views: "2.1K",
      date: "18 Mar 2024",
    },
    {
      title: "Entrevista com o Campeão",
      category: "IndyCar",
      duration: "8:45",
      views: "856",
      date: "22 Mar 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-black-light to-grey-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <ImageIcon className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Multimédia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Galeria de imagens e vídeos das melhores corridas e momentos
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="galeria" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="galeria">Galeria de Imagens</TabsTrigger>
              <TabsTrigger value="videos">Vídeos</TabsTrigger>
            </TabsList>

            {/* Galeria de Imagens */}
            <TabsContent value="galeria">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleries.map((gallery, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:border-primary cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={gallery.thumbnail} 
                        alt={gallery.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary">
                          {gallery.images} fotos
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="outline" className="mb-2">{gallery.category}</Badge>
                        <h3 className="text-xl font-bold text-foreground">{gallery.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{gallery.date}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Galeria Completa</CardTitle>
                  <CardDescription>
                    Todas as fotografias das corridas organizadas por evento e categoria
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[heroImage, indyCarImage, stockCarImage, heroImage, indyCarImage, stockCarImage, heroImage, indyCarImage].map((img, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer">
                        <img 
                          src={img} 
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Vídeos */}
            <TabsContent value="videos">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:border-primary cursor-pointer">
                    <div className="relative h-48 bg-gradient-to-br from-grey-dark to-black flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                      <Play className="h-16 w-16 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-foreground font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge variant="outline">{video.category}</Badge>
                        <span className="text-xs text-muted-foreground">{video.views} views</span>
                      </div>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.date}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-6 w-6 text-primary" />
                    Canal de Vídeos
                  </CardTitle>
                  <CardDescription>
                    Subscreve o nosso canal para não perderes nenhum conteúdo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 p-8 rounded-lg text-center">
                    <Video className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mais vídeos em breve
                    </h3>
                    <p className="text-muted-foreground">
                      Estamos a preparar mais conteúdos exclusivos para ti. Mantém-te atento!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Multimedia;
