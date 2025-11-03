import { FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Documentos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow gov-container py-10">
        <h1 className="text-3xl font-bold text-gov-blue-dark flex items-center gap-2">
          <FileText size={32} /> Documentos
        </h1>
        <p className="mt-4 text-gray-700">
          Aqui você poderá visualizar, enviar e gerenciar documentos oficiais.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Documentos;
