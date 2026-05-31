"use client";

import Link from "next/link";
import { useState } from "react";

import { docentes } from "@/data/docentes";
import { cursos } from "@/data/cursos";
import { recursos } from "@/data/recursos";


export default function BuscarPage() {
  const [busqueda, setBusqueda] = useState("");

  const resultados = [
    ...docentes.map((d) => ({
      tipo: "DOCENTE",
      titulo: d.nombre,
      url: `/docentes/${d.id}`,
    })),

    ...cursos.map((c) => ({
      tipo: "CURSO",
      titulo: c.nombre,
      url: `/cursos/${c.id}`,
    })),

    ...recursos.map((r) => ({
      tipo: "RECURSO",
      titulo: r.titulo,
      url: `/recursos/${r.id}`,
    })),
  ];

  const filtrados = resultados.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          🔍 Buscar en Aulora
        </h1>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar..."
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-6"
        />

        <div className="grid gap-4">
          {filtrados.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700"
            >
              <h2 className="font-bold">
                {item.titulo}
              </h2>

              <p className="text-slate-400">
                {item.tipo}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}