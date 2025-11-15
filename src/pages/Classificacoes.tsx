import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";

const Classificacoes = () => {
  const indycarDrivers = [
    { pos: 1, driver: "Scott Dixon", team: "Chip Ganassi Racing", points: 145, trend: "up" },
    { pos: 2, driver: "Josef Newgarden", team: "Team Penske", points: 138, trend: "up" },
    { pos: 3, driver: "Colton Herta", team: "Andretti Autosport", points: 125, trend: "down" },
    { pos: 4, driver: "Pato O'Ward", team: "Arrow McLaren SP", points: 118, trend: "same" },
    { pos: 5, driver: "Alex Palou", team: "Chip Ganassi Racing", points: 112, trend: "up" },
  ];

  const indycarTeams = [
    { pos: 1, team: "Chip Ganassi Racing", points: 257, trend: "up" },
    { pos: 2, team: "Team Penske", points: 245, trend: "same" },
    { pos: 3, team: "Andretti Autosport", points: 218, trend: "down" },
    { pos: 4, team: "Arrow McLaren SP", points: 195, trend: "up" },
  ];

  const stockcarDrivers = [
    { pos: 1, driver: "Daniel Serra", team: "KTF Racing", points: 152, trend: "up" },
    { pos: 2, driver: "Ricardo Maurício", team: "KTF Racing", points: 145, trend: "same" },
    { pos: 3, driver: "Cacá Bueno", team: "Eurofarma RC", points: 138, trend: "down" },
    { pos: 4, driver: "Felipe Fraga", team: "Eurofarma RC", points: 125, trend: "up" },
    { pos: 5, driver: "Julio Campos", team: "Crown Racing", points: 115, trend: "same" },
  ];

  const stockcarTeams = [
    { pos: 1, team: "KTF Racing", points: 297, trend: "up" },
    { pos: 2, team: "Eurofarma RC", points: 263, trend: "same" },
    { pos: 3, team: "Crown Racing", points: 225, trend: "down" },
    { pos: 4, team: "Pole Motorsport", points: 198, trend: "up" },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getPodiumColor = (pos: number) => {
    if (pos === 1) return "text-yellow-500";
    if (pos === 2) return "text-slate-400";
    if (pos === 3) return "text-orange-600";
    return "";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-black via-black-light to-grey-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Classificações
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanha as classificações atualizadas de pilotos e equipas
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="indycar-drivers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="indycar-drivers">IndyCar - Pilotos</TabsTrigger>
              <TabsTrigger value="indycar-teams">IndyCar - Equipas</TabsTrigger>
              <TabsTrigger value="stockcar-drivers">Stock Car - Pilotos</TabsTrigger>
              <TabsTrigger value="stockcar-teams">Stock Car - Equipas</TabsTrigger>
            </TabsList>

            {/* IndyCar Pilotos */}
            <TabsContent value="indycar-drivers">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    Classificação de Pilotos - IndyCar 2020
                  </CardTitle>
                  <CardDescription>Após 2 rondas disputadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Pos</TableHead>
                        <TableHead>Piloto</TableHead>
                        <TableHead>Equipa</TableHead>
                        <TableHead className="text-right">Pontos</TableHead>
                        <TableHead className="text-center w-16">Tend.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {indycarDrivers.map((driver) => (
                        <TableRow key={driver.pos} className="hover:bg-muted/50">
                          <TableCell className="font-bold">
                            <span className={getPodiumColor(driver.pos)}>{driver.pos}</span>
                          </TableCell>
                          <TableCell className="font-medium">{driver.driver}</TableCell>
                          <TableCell className="text-muted-foreground">{driver.team}</TableCell>
                          <TableCell className="text-right font-semibold">{driver.points}</TableCell>
                          <TableCell className="text-center">{getTrendIcon(driver.trend)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* IndyCar Equipas */}
            <TabsContent value="indycar-teams">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    Classificação de Equipas - IndyCar 2020
                  </CardTitle>
                  <CardDescription>Após 2 rondas disputadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Pos</TableHead>
                        <TableHead>Equipa</TableHead>
                        <TableHead className="text-right">Pontos</TableHead>
                        <TableHead className="text-center w-16">Tend.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {indycarTeams.map((team) => (
                        <TableRow key={team.pos} className="hover:bg-muted/50">
                          <TableCell className="font-bold">
                            <span className={getPodiumColor(team.pos)}>{team.pos}</span>
                          </TableCell>
                          <TableCell className="font-medium">{team.team}</TableCell>
                          <TableCell className="text-right font-semibold">{team.points}</TableCell>
                          <TableCell className="text-center">{getTrendIcon(team.trend)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Stock Car Pilotos */}
            <TabsContent value="stockcar-drivers">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    Classificação de Pilotos - Stock Car 2019
                  </CardTitle>
                  <CardDescription>Após 2 etapas disputadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Pos</TableHead>
                        <TableHead>Piloto</TableHead>
                        <TableHead>Equipa</TableHead>
                        <TableHead className="text-right">Pontos</TableHead>
                        <TableHead className="text-center w-16">Tend.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stockcarDrivers.map((driver) => (
                        <TableRow key={driver.pos} className="hover:bg-muted/50">
                          <TableCell className="font-bold">
                            <span className={getPodiumColor(driver.pos)}>{driver.pos}</span>
                          </TableCell>
                          <TableCell className="font-medium">{driver.driver}</TableCell>
                          <TableCell className="text-muted-foreground">{driver.team}</TableCell>
                          <TableCell className="text-right font-semibold">{driver.points}</TableCell>
                          <TableCell className="text-center">{getTrendIcon(driver.trend)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Stock Car Equipas */}
            <TabsContent value="stockcar-teams">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    Classificação de Equipas - Stock Car 2019
                  </CardTitle>
                  <CardDescription>Após 2 etapas disputadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16">Pos</TableHead>
                        <TableHead>Equipa</TableHead>
                        <TableHead className="text-right">Pontos</TableHead>
                        <TableHead className="text-center w-16">Tend.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stockcarTeams.map((team) => (
                        <TableRow key={team.pos} className="hover:bg-muted/50">
                          <TableCell className="font-bold">
                            <span className={getPodiumColor(team.pos)}>{team.pos}</span>
                          </TableCell>
                          <TableCell className="font-medium">{team.team}</TableCell>
                          <TableCell className="text-right font-semibold">{team.points}</TableCell>
                          <TableCell className="text-center">{getTrendIcon(team.trend)}</TableCell>
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

export default Classificacoes;
