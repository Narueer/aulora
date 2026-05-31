import { recursos } from "@/data/recursos";
import Link from "next/link";

export default async function OtrosPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const otros = recursos.filter(
    (recurso) =>
      recurso.tipo === "OTRO" &&
      recurso.cursoId === id
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">

        <h1 className="text-4xl font-bold mb-6">
          📦 Otros
        </h1>

        <p>Curso actual: {id}</p>

        <div className="space-y-4">

          {otros.map((otro) => (
            <div
              key={otro.id}
              className="bg-slate-700 p-4 rounded-lg"
            >
              <Link
                href={`/recursos/${otro.id}`}
                className="text-xl font-semibold text-blue-400 hover:underline"
              >
                {otro.titulo}
              </Link>

              <p>{otro.descripcion}</p>

              <p className="mt-2">
                👤 {otro.autor}
              </p>

              <p>
                📅 {otro.fecha}
              </p>

              <p>
                👍 {otro.votos}
              </p>

              <p>
                📄 {otro.archivo}
              </p>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}