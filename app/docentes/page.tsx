import { docentes } from "@/data/docentes";
import Link from "next/link";

export default function Docentes() {
  

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Docentes
      </h1>

      <div className="space-y-4">
        {docentes.map((docente, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">
              {docente.nombre}
            </h2>
            <Link href={`/docentes/${index + 1}`} className="inline-block mt-3 bg-blue-600 px-4 py-2 rounded">
              Ver Perfil
            </Link>

            <p>{docente.curso}</p>

            <p>
              ⭐ {docente.recomendacion}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}