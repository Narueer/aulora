"use client";

import Link from "next/link";
import { recursos } from "@/data/recursos";
import { useState } from "react";

export default function RecursosPage() {
  const [busqueda, setBusqueda] = useState("");

  const recursosFiltrados = recursos.filter((recurso) =>
    recurso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    recurso.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
    recurso.tipo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          📚 Recursos Académicos
        </h1>

        <input
          type="text"
          placeholder="Buscar recursos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-6"
        />

        <p className="mb-4 text-slate-400">
          Resultados: {recursosFiltrados.length}
        </p>

        <div className="grid gap-4">

          {recursosFiltrados.map((recurso) => (
            <Link
              key={recurso.id}
              href={`/recursos/${recurso.id}`}
              className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition"
            >
              <h2 className="text-xl font-semibold">
                {recurso.titulo}
              </h2>

              <p className="text-slate-300">
                {recurso.descripcion}
              </p>

              <p className="text-sm text-slate-400 mt-2">
                Tipo: {recurso.tipo}
              </p>
            </Link>
          ))}

          {recursosFiltrados.length === 0 && (
            <div className="bg-slate-800 p-4 rounded-lg">
              No se encontraron recursos.
            </div>
          )}

        </div>

      </div>
    </main>
  );
}