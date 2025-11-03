import { Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Ouvidoria = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow gov-container py-10">
        <h1 className="text-3xl font-bold text-gov-blue-dark flex items-center gap-2">
          <Users size={32} /> Ouvidoria
        </h1>
        <p className="mt-4 text-gray-700">
          Envie sugestões, reclamações, elogios ou denúncias de forma segura e confidencial.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Ouvidoria;
