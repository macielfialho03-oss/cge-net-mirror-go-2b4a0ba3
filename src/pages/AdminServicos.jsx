import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function AdminServicos() {
  const [servicos, setServicos] = useState([]);
  const [carregandoId, setCarregandoId] = useState(null);
  const [novo, setNovo] = useState({
    Nome: "",
    Descricao: "",
    IconType: "",
    Link: "",
    LinkText: "",
    ImageUrl: "",
  });

  // 🔹 Carrega serviços do backend
  const carregarServicos = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/servicos");
      const dados = await res.json();
      setServicos(dados);
    } catch (error) {
      console.error("Erro ao carregar serviços:", error);
    }
  };

  useEffect(() => {
    carregarServicos();
  }, []);

  // ➕ Criar novo serviço
  const criarServico = async () => {
    if (!novo.Nome || !novo.Descricao) {
      alert("Preencha pelo menos o Nome e a Descrição.");
      return;
    }
    try {
      await fetch("http://localhost:3001/api/servicos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novo),
      });
      setNovo({
        Nome: "",
        Descricao: "",
        IconType: "",
        Link: "",
        LinkText: "",
        ImageUrl: "",
      });
      await carregarServicos();
      alert("Serviço adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar serviço:", error);
      alert("Não foi possível adicionar o serviço.");
    }
  };

  // 🗑️ Excluir serviço
  const deletarServico = async (id) => {
    const confirmado = window.confirm("Deseja realmente excluir este serviço?");
    if (!confirmado) return;

    try {
      setCarregandoId(id); // mostra loading só naquele botão
      await fetch(`http://localhost:3001/api/servicos/${id}`, {
        method: "DELETE",
      });
      await carregarServicos();
      alert("Serviço excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
      alert("Não foi possível excluir o serviço.");
    } finally {
      setCarregandoId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* 🔙 Voltar */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-blue-700 hover:underline font-medium flex items-center gap-1"
        >
          ← Voltar para o Portal
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Gerenciar Serviços
      </h1>

      {/* 🆕 Formulário */}
      <div className="mb-10 p-6 bg-gray-50 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Adicionar Novo Serviço
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="border p-2 rounded w-full"
            value={novo.Nome}
            onChange={(e) => setNovo({ ...novo, Nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="IconType (ex: BookOpen)"
            className="border p-2 rounded w-full"
            value={novo.IconType}
            onChange={(e) => setNovo({ ...novo, IconType: e.target.value })}
          />
          <input
            type="text"
            placeholder="Link (ex: /documentos)"
            className="border p-2 rounded w-full"
            value={novo.Link}
            onChange={(e) => setNovo({ ...novo, Link: e.target.value })}
          />
          <input
            type="text"
            placeholder="Texto do Link (ex: Acessar Agora)"
            className="border p-2 rounded w-full"
            value={novo.LinkText}
            onChange={(e) => setNovo({ ...novo, LinkText: e.target.value })}
          />
        </div>

        <textarea
          placeholder="Descrição"
          className="border p-2 rounded w-full mt-4"
          rows="3"
          value={novo.Descricao}
          onChange={(e) => setNovo({ ...novo, Descricao: e.target.value })}
        />

        <div className="flex justify-center mt-6">
          <button
            onClick={criarServico}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            ➕ Adicionar Serviço
          </button>
        </div>
      </div>

      {/* 📋 Tabela */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Serviços Cadastrados
      </h2>

      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Nome</th>
              <th className="p-2 border">Descrição</th>
              <th className="p-2 border text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((s) => (
              <tr key={s.Id} className="hover:bg-gray-50">
                <td className="p-2 border">{s.Id}</td>
                <td className="p-2 border">{s.Nome}</td>
                <td className="p-2 border text-sm text-gray-600">
                  {s.Descricao}
                </td>
                <td className="p-2 border">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => deletarServico(s.Id)}
                      disabled={carregandoId === s.Id}
                      className={`flex items-center gap-2 px-3 py-1 rounded text-white transition
                        ${carregandoId === s.Id ? "bg-red-400" : "bg-red-600 hover:bg-red-700"}
                      `}
                      title="Excluir"
                    >
                      <Trash2 className="w-4 h-4" />
                      {carregandoId === s.Id ? "Excluindo..." : "Excluir"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {servicos.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4 italic">
                  Nenhum serviço cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
