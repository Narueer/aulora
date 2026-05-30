import { docentes } from "@/data/docentes";

export default async function PerfilDocente({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const docente = docentes.find((d) => d.id === id);

  if (!docente) {
    return <h1>Docente no encontrado</h1>;
  }

  return (
   <main className="min-h-screen bg-slate-900 text-white p-8">
  <div className="max-w-2xl mx-auto bg-slate-800 p-6 rounded-xl">
    <h1 className="text-4xl font-bold mb-4">
      {docente.nombre}
    </h1>

    <p className="mb-2">
      📚 Curso: {docente.curso}
    </p>

    <p className="mb-2">
      ⭐ Calificación: {docente.recomendacion}
    </p>

    <p className="mb-2">
      🔥 Dificultad: {docente.dificultad}
    </p>

    <p>
      {docente.recomendado
        ? "✅ Recomendado por los alumnos"
        : "❌ No recomendado"}
    </p>
    <h2 className="text-xl font-bold mt-6 mb-2">
  Comentarios
</h2>

<ul>
  {docente.comentarios.map((comentario, index) => (
    <li key={index}>• {comentario}</li>
  ))}
</ul>

<h2 className="text-xl font-bold mt-6 mb-2">
  Pros
</h2>

<ul>
  {docente.pros.map((pro, index) => (
    <li key={index}>✅ {pro}</li>
  ))}
</ul>

<h2 className="text-xl font-bold mt-6 mb-2">
  Contras
</h2>

<ul>
  {docente.contras.map((contra, index) => (
    <li key={index}>❌ {contra}</li>
  ))}
</ul>

  </div>
</main>
  );
}