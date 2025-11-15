import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import indyCarImage from "@/assets/indy-car.jpg";

const IndyCar = () => {
  const teams = [
    { name: "Team Penske", car: "#1, #2", drivers: "Josef Newgarden, Scott McLaughlin" },
    { name: "Chip Ganassi Racing", car: "#9, #10", drivers: "Scott Dixon, Alex Palou" },
    { name: "Andretti Autosport", car: "#26, #27", drivers: "Colton Herta, Alexander Rossi" },
    { name: "Arrow McLaren SP", car: "#5, #7", drivers: "Pato O'Ward, Felix Rosenqvist" },
  ];

  const drivers = [
    { name: "Josef Newgarden", team: "Team Penske", number: "1", country: "🇺🇸" },
    { name: "Scott Dixon", team: "Chip Ganassi Racing", number: "9", country: "🇳🇿" },
    { name: "Colton Herta", team: "Andretti Autosport", number: "26", country: "🇺🇸" },
    { name: "Pato O'Ward", team: "Arrow McLaren SP", number: "5", country: "🇲🇽" },
    { name: "Alex Palou", team: "Chip Ganassi Racing", number: "10", country: "🇪🇸" },
    { name: "Alexander Rossi", team: "Andretti Autosport", number: "27", country: "🇺🇸" },
  ];

  const races = [
    { round: 1, name: "GP de Indianapolis", circuit: "Indianapolis Motor Speedway - Road Course", date: "15/03/2024" },
    { round: 2, name: "GP de Texas", circuit: "Texas Motor Speedway", date: "22/03/2024" },
    { round: 3, name: "GP de Long Beach", circuit: "Streets of Long Beach", date: "05/04/2024" },
    { round: 4, name: "GP de Barber", circuit: "Barber Motorsports Park", date: "19/04/2024" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${indyCarImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 text-sm" variant="outline">Categoria Principal</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            IndyCar 2020
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monolugares de corrida de alto desempenho em circuitos desafiantes
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="descricao" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="descricao">Descrição</TabsTrigger>
              <TabsTrigger value="equipas">Equipas</TabsTrigger>
              <TabsTrigger value="pilotos">Pilotos</TabsTrigger>
              <TabsTrigger value="regulamento">Regulamento</TabsTrigger>
              <TabsTrigger value="provas">Provas</TabsTrigger>
            </TabsList>

            <TabsContent value="descricao">
              <Card>
                <CardHeader>
                  <CardTitle>Sobre a Categoria IndyCar 2020</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    A IndyCar Series de 2020 representa o auge das corridas de monolugares nos Estados Unidos. 
                    Com carros que ultrapassam os 370 km/h em circuitos ovais e velocidades médias impressionantes 
                    em circuitos urbanos e mistos, esta categoria oferece corridas emocionantes e imprevisíveis.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Características Técnicas</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Motor: V6 Twin-Turbo de 2.2L com mais de 700cv</li>
                    <li>Peso mínimo: 730 kg (sem piloto e combustível)</li>
                    <li>Aerodinâmica: Sistema de ajuste de asa móvel (Push-to-Pass)</li>
                    <li>Pneus: Firestone com compostos diferentes para cada tipo de circuito</li>
                    <li>Velocidade máxima: Superior a 370 km/h em ovais</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Formato de Corrida</h3>
                  <p className="text-muted-foreground">
                    As corridas incluem treinos livres, qualificação e corrida principal. Dependendo do tipo de circuito, 
                    podem incluir pit stops obrigatórios e diferentes estratégias de combustível e pneus.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="equipas">
              <Card>
                <CardHeader>
                  <CardTitle>Equipas IndyCar 2020</CardTitle>
                  <CardDescription>Lista completa de equipas participantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Equipa</TableHead>
                        <TableHead>Carros</TableHead>
                        <TableHead>Pilotos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teams.map((team, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{team.name}</TableCell>
                          <TableCell>{team.car}</TableCell>
                          <TableCell>{team.drivers}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pilotos">
              <Card>
                <CardHeader>
                  <CardTitle>Pilotos IndyCar 2020</CardTitle>
                  <CardDescription>Lista completa de pilotos inscritos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {drivers.map((driver, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg flex items-center gap-2">
                                {driver.country} {driver.name}
                              </CardTitle>
                              <CardDescription className="mt-1">{driver.team}</CardDescription>
                            </div>
                            <Badge variant="outline">#{driver.number}</Badge>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regulamento">
              <Card>
                <CardHeader>
                  <CardTitle>Regulamento IndyCar 2020</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sistema de Pontuação</h3>
                  <div className="bg-muted/30 p-4 rounded-lg mb-6">
                    <p className="text-muted-foreground mb-2">Pontos atribuídos por posição:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>1º lugar: 50 pontos</li>
                      <li>2º lugar: 40 pontos</li>
                      <li>3º lugar: 35 pontos</li>
                      <li>4º lugar: 32 pontos</li>
                      <li>5º lugar: 30 pontos</li>
                      <li>6º ao 12º: 28, 26, 24, 22, 20, 19, 18 pontos</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">+ 1 ponto por liderar uma volta</p>
                    <p className="text-muted-foreground">+ 2 pontos por liderar mais voltas</p>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Regras Gerais</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Respeito entre pilotos - contacto desnecessário será penalizado</li>
                    <li>Limites de pista devem ser respeitados</li>
                    <li>Pit stops obrigatórios em corridas acima de 60 minutos</li>
                    <li>Sistema de bandeiras: Amarela (cautela), Azul (volta rápida), Preta (penalização)</li>
                    <li>Protestos devem ser enviados até 30 minutos após a corrida</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Penalizações</h3>
                  <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Contacto evitável: Drive-through ou +5s</li>
                      <li>Corte de pista com ganho: +3s por infração</li>
                      <li>Excesso de velocidade no pit lane: Drive-through</li>
                      <li>Largada antecipada: Stop & Go 10s</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="provas">
              <Card>
                <CardHeader>
                  <CardTitle>Calendário IndyCar 2020</CardTitle>
                  <CardDescription>Lista de provas da temporada</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ronda</TableHead>
                        <TableHead>Grande Prémio</TableHead>
                        <TableHead>Circuito</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {races.map((race) => (
                        <TableRow key={race.round}>
                          <TableCell className="font-medium">{race.round}</TableCell>
                          <TableCell>{race.name}</TableCell>
                          <TableCell>{race.circuit}</TableCell>
                          <TableCell>{race.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default IndyCar;
