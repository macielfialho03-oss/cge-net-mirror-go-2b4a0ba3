import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Servicos from "@/components/Servicos";
import NewsSection from "@/components/NewsSection";
import WelcomeMessage from "@/components/WelcomeMessage";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="gov-container pt-8">
          <WelcomeMessage />
        </div>

        {/* 🟢 Aqui vai a seção dinâmica vinda do SQL Server */}
        <Servicos />

        {/* 🟠 Notícias (pode manter se quiser mostrar abaixo) */}
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
