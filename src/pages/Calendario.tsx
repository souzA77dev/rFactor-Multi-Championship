import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

const Calendario = () => {
  const indycarRaces = [
    { 
      round: 1, 
      name: "GP de Indianapolis", 
      circuit: "Indianapolis Motor Speedway - Road Course",
      date: "15 Março 2024",
      time: "20:00",
      status: "completed"
    },
    { 
      round: 2, 
      name: "GP de Texas", 
      circuit: "Texas Motor Speedway",
      date: "22 Março 2024",
      time: "21:00",
      status: "completed"
    },
    { 
      round: 3, 
      name: "GP de Long Beach", 
      circuit: "Streets of Long Beach",
      date: "5 Abril 2024",
      time: "20:00",
      status: "upcoming"
    },
    { 
      round: 4, 
      name: "GP de Barber", 
      circuit: "Barber Motorsports Park",
      date: "19 Abril 2024",
      time: "19:00",
      status: "upcoming"
    },
  ];

  const stockcarRaces = [
    { 
      round: 1, 
      name: "Etapa de Interlagos", 
      circuit: "Autódromo de Interlagos",
      date: "18 Março 2024",
      time: "21:00",
      status: "completed"
    },
    { 
      round: 2, 
      name: "Etapa de Goiânia", 
      circuit: "Autódromo Internacional de Goiânia",
      date: "25 Março 2024",
      time: "20:30",
      status: "completed"
    },
    { 
      round: 3, 
      name: "Etapa de Curitiba", 
      circuit: "Autódromo Internacional de Curitiba",
      date: "8 Abril 2024",
      time: "21:00",
      status: "upcoming"
    },
    { 
      round: 4, 
      name: "Etapa de Santa Cruz", 
      circuit: "Autódromo de Santa Cruz do Sul",
      date: "22 Abril 2024",
      time: "20:00",
      status: "upcoming"
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === "completed") {
      return <Badge variant="secondary">Concluída</Badge>;
    }
    return <Badge className="bg-primary">Próxima</Badge>;
  };

  const RaceCard = ({ race }: { race: typeof indycarRaces[0] }) => (
    <Card className="hover:shadow-lg transition-all hover:border-primary">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">Ronda {race.round}</Badge>
              {getStatusBadge(race.status)}
            </div>
            <CardTitle className="text-xl">{race.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm">{race.circuit}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarIcon className="h-4 w-4 text-primary" />
          <span className="text-sm">{race.date}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm">{race.time} (GMT)</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-black-light to-grey-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Calendário de Corridas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas as datas e horários das competições de IndyCar e Stock Car
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="geral" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="indycar">IndyCar</TabsTrigger>
              <TabsTrigger value="stockcar">Stock Car</TabsTrigger>
            </TabsList>

            <TabsContent value="geral">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Badge className="bg-primary">IndyCar 2020</Badge>
                  </h2>
                  <div className="space-y-4">
                    {indycarRaces.map((race) => (
                      <RaceCard key={race.round} race={race} />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Badge className="bg-primary">Stock Car 2019</Badge>
                  </h2>
                  <div className="space-y-4">
                    {stockcarRaces.map((race) => (
                      <RaceCard key={race.round} race={race} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="indycar">
              <div className="max-w-4xl mx-auto">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Calendário IndyCar 2020</CardTitle>
                    <CardDescription>
                      Temporada completa com 4 rondas emocionantes em circuitos icónicos
                    </CardDescription>
                  </CardHeader>
                </Card>
                <div className="grid md:grid-cols-2 gap-6">
                  {indycarRaces.map((race) => (
                    <RaceCard key={race.round} race={race} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stockcar">
              <div className="max-w-4xl mx-auto">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Calendário Stock Car 2019</CardTitle>
                    <CardDescription>
                      Temporada completa com 4 etapas nos melhores autódromos brasileiros
                    </CardDescription>
                  </CardHeader>
                </Card>
                <div className="grid md:grid-cols-2 gap-6">
                  {stockcarRaces.map((race) => (
                    <RaceCard key={race.round} race={race} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Calendario;
