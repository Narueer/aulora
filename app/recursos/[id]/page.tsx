import { recursos } from "@/data/recursos";

export default async function RecursoDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recurso = recursos.find(
    (r) => r.id === id
  );

  if (!recurso) {
    return <h1>Recurso no encontrado</h1>;
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">

        <h1 className="text-4xl font-bold mb-4">
          {recurso.titulo}
        </h1>

        <p className="mb-4">
          {recurso.descripcion}
        </p>

        <p>👤 {recurso.autor ?? "Sin autor"}</p>

        <p>📅 {recurso.fecha ?? "Sin fecha"}</p>

        <p>👍 {recurso.votos ?? 0}</p>

        <p>📄 {recurso.archivo ?? "Sin archivo"}</p>

      </div>
    </main>
  );
}