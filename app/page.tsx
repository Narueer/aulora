import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <nav className="flex justify-between items-center p-6 bg-slate-800">
        <h1 className="text-2xl font-bold">
          <Link href="/">AULORA</Link>
        </h1>

        <div className="flex gap-6">
          <Link href="/docentes">Docentes</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/buscar">Buscar</Link>
          <Link href="/perfil">Perfil</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center h-[80vh]">
        <h2 className="text-6xl font-bold mb-4">
          Bienvenido a Aulora
        </h2>

        <p className="text-xl text-gray-300">
          Encuentra docentes, recursos académicos y ayuda universitaria.
        </p>
      </section>
    </main>
  );
}