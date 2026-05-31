import Link from "next/link";
import { recursos } from "@/data/recursos";

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          📚 Recursos Académicos
        </h1>

        <input
          type="text"
          placeholder="Buscar recursos..."
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-6"
        />

        <div className="grid gap-4">

          {recursos.map((recurso) => (
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

        </div>

      </div>
    </main>
  );
}