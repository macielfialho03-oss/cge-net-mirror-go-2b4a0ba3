import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "./contexts/AdminContext";

import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Documentos from "./pages/Documentos";
import Consultas from "./pages/Consultas";
import Relatorios from "./pages/Relatorios";
import Ouvidoria from "./pages/Ouvidoria";
import Legislacao from "./pages/Legislacao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacidade" element={<Privacy />} />

            {/* 🔹 Novas páginas */}
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/ouvidoria" element={<Ouvidoria />} />
            <Route path="/legislacao" element={<Legislacao />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
