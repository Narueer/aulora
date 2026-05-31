import { cursos } from "@/data/cursos";
import { docentes } from "@/data/docentes";
import Link from "next/link";

export default async function CursoDetalle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const curso = cursos.find((c) => c.id === id);

  if (!curso) {
    return <h1>Curso no encontrado</h1>;
  }


const docentesCurso = docentes
  .filter((d) => d.cursoId === id)
  .sort((a, b) => b.recomendacion - a.recomendacion);
  
 
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-slate-800 p-6 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">
          {curso.nombre}
        </h1>

        <p className="mb-6">
          📚 Ciclo: {curso.ciclo}
        </p>

        <h2 className="text-2xl font-bold mb-4">
  Docentes
</h2>

{docentesCurso.map((docente) => (
  <div
    key={docente.id}
    className="bg-slate-700 p-4 rounded-lg mb-4"
  >
    <h3 className="text-xl font-semibold">
      {docente.nombre}
    </h3>

    <p>
      ⭐ {docente.recomendacion}
    </p>

    <Link
      href={`/docentes/${docente.id}`}
      className="inline-block mt-2 bg-blue-600 px-4 py-2 rounded-lg"
    >
      Ver perfil
    </Link>
  </div>
))}

<h2 className="text-2xl font-bold mt-8 mb-4">
  📂 Recursos del Curso
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

  <Link
    href={`/cursos/${id}/abr`}
    className="bg-slate-700 p-4 rounded-lg block hover:bg-slate-600"
  >
    📁 ABR
  </Link>

  <Link
    href={`/cursos/${id}/practicas`}
    className="bg-slate-700 p-4 rounded-lg block hover:bg-slate-600"
  >
    📝 Prácticas
  </Link>

  <Link
    href={`/cursos/${id}/examenes`}
    className="bg-slate-700 p-4 rounded-lg block hover:bg-slate-600"
  >
    📄 Exámenes
  </Link>

  <Link
  href={`/cursos/${id}/trabajos`}
  className="bg-slate-700 p-4 rounded-lg block hover:bg-slate-600"
>
  👥 Trabajos
</Link>

  <Link
    href={`/cursos/${id}/otros`}
    className="bg-slate-700 p-4 rounded-lg block hover:bg-slate-600"
  >
    📦 Otros
  </Link>

</div>
      </div>
    </main>
  );
}