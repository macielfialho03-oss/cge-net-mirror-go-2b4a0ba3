import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

export default function Servicos() {
  const [servicos, setServicos] = useState([]);

  // 🔹 Busca serviços do backend
  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/servicos");
        setServicos(res.data);
      } catch (error) {
        console.error("Erro ao buscar serviços:", error);
      }
    };

    fetchServicos();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Nossos Serviços
      </h2>

      {servicos.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum serviço disponível.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicos.map((s) => {
            const Icon = Icons[s.IconType] || Icons["SquareDot"];
            return (
              <div
                key={s.Id}
                className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-white p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-10 h-10 text-blue-800 mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {s.Nome}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{s.Descricao}</p>
                </div>

                <Link
                  to={s.Link || "#"}
                  className="text-blue-700 font-medium hover:underline text-center"
                >
                  {s.LinkText || "Acessar"}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
