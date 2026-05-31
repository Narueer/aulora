import { recursos } from "@/data/recursos";
import Link from "next/link";

 export default async function TrabajosPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
    const trabajos = recursos.filter((recurso) => recurso.tipo ===  "TRABAJO" && recurso.cursoId === id
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">

        <h1 className="text-4xl font-bold mb-6">
          📝 Trabajos
        </h1>
        <p>Curso actual: {id}</p>
        <div className="space-y-4">

  {trabajos.map((trabajo) => (
    <div
      key={trabajo.id}
      className="bg-slate-700 p-4 rounded-lg"
    >
      <Link
        href={`/recursos/${trabajo.id}`}
        className="text-xl font-semibold text-blue-400 hover:underline"
>
        {trabajo.titulo}
      </Link>

      <p>{trabajo.descripcion}</p>

      <p className="mt-2">
        👤 {trabajo.autor}
      </p>

      <p>
        📅 {trabajo.fecha}
      </p>

      <p>
        👍 {trabajo.votos}
      </p>

      <p>
        📄 {trabajo.archivo}
      </p>
    </div>
  ))}

</div>

      </div>
    </main>
  );
}