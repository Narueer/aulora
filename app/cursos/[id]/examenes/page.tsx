import { recursos } from "@/data/recursos";
import Link from "next/link";

export default async function ExamenesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const examenes = recursos.filter(
    (recurso) =>
      recurso.tipo === "EXAMEN" &&
      recurso.cursoId === id
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">

        <h1 className="text-4xl font-bold mb-6">
          📄 Exámenes
        </h1>

        <p>Curso actual: {id}</p>

        <div className="space-y-4">

          {examenes.map((examen) => (
            <div
              key={examen.id}
              className="bg-slate-700 p-4 rounded-lg"
            >
              <Link
                href={`/recursos/${examen.id}`}
                className="text-xl font-semibold text-blue-400 hover:underline"
              >
                {examen.titulo}
              </Link>

              <p>{examen.descripcion}</p>

              <p className="mt-2">
                👤 {examen.autor}
              </p>

              <p>
                📅 {examen.fecha}
              </p>

              <p>
                👍 {examen.votos}
              </p>

              <p>
                📄 {examen.archivo}
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}