"use client";

import { useState } from "react";
import Link from "next/link";
import { cursos } from "@/data/cursos";
import { docentes } from "@/data/docentes";

export default function Cursos() {
  const [busqueda, setBusqueda] = useState("");

  const cursosFiltrados = cursos.filter((curso) =>
    curso.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  const docentesFiltrados = docentes.filter((docente) =>
    docente.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Cursos
      </h1>

      <input
        type="text"
        placeholder="🔍 Buscar curso o docente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 mb-6"
      />

      <div className="space-y-4">
        {cursosFiltrados.map((curso) => (
          <div
            key={curso.id}
            className="bg-slate-800 p-4 rounded-xl"
          >
            <h2 className="text-2xl font-semibold">
              {curso.nombre}
            </h2>

            <p className="mt-2">
              Ciclo: {curso.ciclo}
            </p>

            <Link
              href={`/cursos/${curso.id}`}
              className="inline-block mt-3 bg-blue-600 px-4 py-2 rounded-lg"
            >
              Ver curso
            </Link>
          </div>
        ))}
      </div>
      {busqueda && docentesFiltrados.length > 0 && (
  <>
    <h2 className="text-2xl font-bold mt-8 mb-4">
      Docentes
    </h2>

    {docentesFiltrados.map((docente) => (
      <div
        key={docente.id}
        className="bg-slate-800 p-4 rounded-xl mb-4"
      >
        <h3 className="text-xl font-semibold">
          {docente.nombre}
        </h3>

        <p>⭐ {docente.recomendacion}</p>

        <Link
          href={`/docentes/${docente.id}`}
          className="inline-block mt-2 bg-green-600 px-4 py-2 rounded-lg"
        >
          Ver perfil
        </Link>
      </div>
    ))}
  </>
)}
    </main>
  );
}