import { recursos } from "@/data/recursos";
import Link from "next/link";

export default async function PracticasPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const practicas = recursos.filter(
    (recurso) =>
      recurso.tipo === "PRACTICA" &&
      recurso.cursoId === id
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">

        <h1 className="text-4xl font-bold mb-6">
          📝 Prácticas
        </h1>

        <p>Curso actual: {id}</p>

        <div className="space-y-4">

          {practicas.map((practica) => (
            <div
              key={practica.id}
              className="bg-slate-700 p-4 rounded-lg"
            >
              <Link
                href={`/recursos/${practica.id}`}
                className="text-xl font-semibold text-blue-400 hover:underline"
              >
                {practica.titulo}
              </Link>

              <p>{practica.descripcion}</p>

              <p className="mt-2">
                👤 {practica.autor}
              </p>

              <p>
                📅 {practica.fecha}
              </p>

              <p>
                👍 {practica.votos}
              </p>

              <p>
                📄 {practica.archivo}
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}