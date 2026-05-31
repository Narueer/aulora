import { recursos } from "@/data/recursos";
import Link from "next/link";

export default async function AbrPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const abrs = recursos.filter(
    (recurso) =>
      recurso.tipo === "ABR" &&
      recurso.cursoId === id
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">

        <h1 className="text-4xl font-bold mb-6">
          📁 ABR
        </h1>

        <p>Curso actual: {id}</p>

        <div className="space-y-4">

          {abrs.map((abr) => (
            <div
              key={abr.id}
              className="bg-slate-700 p-4 rounded-lg"
            >
              <Link
                href={`/recursos/${abr.id}`}
                className="text-xl font-semibold text-blue-400 hover:underline"
              >
                {abr.titulo}
              </Link>

              <p>{abr.descripcion}</p>

              <p className="mt-2">
                👤 {abr.autor}
              </p>

              <p>
                📅 {abr.fecha}
              </p>

              <p>
                👍 {abr.votos}
              </p>

              <p>
                📄 {abr.archivo}
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}