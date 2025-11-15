import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import IndyCar from "./pages/IndyCar";
import StockCar from "./pages/StockCar";
import Calendario from "./pages/Calendario";
import Classificacoes from "./pages/Classificacoes";
import Multimedia from "./pages/Multimedia";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indycar" element={<IndyCar />} />
            <Route path="/stockcar" element={<StockCar />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/classificacoes" element={<Classificacoes />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
