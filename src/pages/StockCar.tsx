import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import stockCarImage from "@/assets/stock-car.jpg";

const StockCar = () => {
  const teams = [
    { name: "KTF Racing", car: "#8, #18", drivers: "Ricardo Maurício, Daniel Serra" },
    { name: "Eurofarma RC", car: "#51, #90", drivers: "Cacá Bueno, Felipe Fraga" },
    { name: "Crown Racing", car: "#4, #77", drivers: "Julio Campos, Sergio Jimenez" },
    { name: "Pole Motorsport", car: "#25, #33", drivers: "Gabriel Casagrande, Tony Kanaan" },
  ];

  const drivers = [
    { name: "Ricardo Maurício", team: "KTF Racing", number: "18", country: "🇧🇷" },
    { name: "Daniel Serra", team: "KTF Racing", number: "8", country: "🇧🇷" },
    { name: "Cacá Bueno", team: "Eurofarma RC", number: "51", country: "🇧🇷" },
    { name: "Felipe Fraga", team: "Eurofarma RC", number: "90", country: "🇧🇷" },
    { name: "Julio Campos", team: "Crown Racing", number: "4", country: "🇧🇷" },
    { name: "Gabriel Casagrande", team: "Pole Motorsport", number: "25", country: "🇧🇷" },
  ];

  const races = [
    { round: 1, name: "Etapa de Interlagos", circuit: "Autódromo de Interlagos", date: "18/03/2024" },
    { round: 2, name: "Etapa de Goiânia", circuit: "Autódromo Internacional de Goiânia", date: "25/03/2024" },
    { round: 3, name: "Etapa de Curitiba", circuit: "Autódromo Internacional de Curitiba", date: "08/04/2024" },
    { round: 4, name: "Etapa de Santa Cruz", circuit: "Autódromo de Santa Cruz do Sul", date: "22/04/2024" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stockCarImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 text-sm" variant="outline">Categoria Principal</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Stock Car 2019
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carros de turismo potentes em ação roda-a-roda nos melhores circuitos
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
                  <CardTitle>Sobre a Categoria Stock Car 2019</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    A Stock Car Pro Series é o principal campeonato de automobilismo do Brasil, conhecido pelas suas 
                    corridas intensas e competitivas. Com carros baseados em modelos de produção mas altamente 
                    modificados, oferece espetáculo garantido com ultrapassagens arriscadas e disputas roda-a-roda.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Características Técnicas</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Motor: V8 aspirado de 5.0L com aproximadamente 470cv</li>
                    <li>Peso mínimo: 1200 kg (com piloto)</li>
                    <li>Transmissão: Sequencial de 6 velocidades</li>
                    <li>Pneus: BFGoodrich com compostos diferentes para corridas de sprint e endurance</li>
                    <li>Velocidade máxima: Cerca de 280 km/h</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Formato de Corrida</h3>
                  <p className="text-muted-foreground">
                    O formato inclui treino classificatório, corrida de qualificação (sprint) e corrida principal. 
                    As corridas principais têm duração variável com pit stops obrigatórios para reabastecimento 
                    e troca de pneus.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="equipas">
              <Card>
                <CardHeader>
                  <CardTitle>Equipas Stock Car 2019</CardTitle>
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
                  <CardTitle>Pilotos Stock Car 2019</CardTitle>
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
                  <CardTitle>Regulamento Stock Car 2019</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sistema de Pontuação</h3>
                  <div className="bg-muted/30 p-4 rounded-lg mb-6">
                    <p className="text-muted-foreground mb-2">Corrida de Qualificação (Sprint):</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>1º lugar: 5 pontos | 2º: 4 pontos | 3º: 3 pontos | 4º: 2 pontos | 5º: 1 ponto</li>
                    </ul>
                    <p className="text-muted-foreground mt-3 mb-2">Corrida Principal:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>1º lugar: 30 pontos</li>
                      <li>2º lugar: 25 pontos</li>
                      <li>3º lugar: 21 pontos</li>
                      <li>4º ao 10º: 18, 16, 14, 12, 10, 8, 6 pontos</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Regras Gerais</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Contacto controlado permitido - batidas intencionais serão penalizadas</li>
                    <li>Respeito pelos limites de pista</li>
                    <li>Pit stop obrigatório em todas as corridas principais</li>
                    <li>Janela de pit stop: entre a volta 8 e volta final -3</li>
                    <li>Sistema de bandeiras conforme regulamento FIA</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Penalizações</h3>
                  <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Contacto provocando abandono: +30s ou desclassificação</li>
                      <li>Corte de pista com ganho: +5s por infração</li>
                      <li>Pit stop fora da janela: Desclassificação</li>
                      <li>Ultrapassagem sob bandeira amarela: +10s</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="provas">
              <Card>
                <CardHeader>
                  <CardTitle>Calendário Stock Car 2019</CardTitle>
                  <CardDescription>Lista de provas da temporada</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ronda</TableHead>
                        <TableHead>Etapa</TableHead>
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

export default StockCar;
