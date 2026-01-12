import Link from "next/link";
import SobrePage from "@/app/sobre/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <nav className="fixed top-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-md px-6 py-4">
        <div className="mx-auto max-w-7xl flex justify-center gap-12 text-2xl">
          <Link href="/sobre" className="text-white hover:underline">Sobre</Link>
          <Link href="/contato" className="text-white hover:underline">Contato</Link>
          <Link href="/projetos" className="text-white hover:underline">Projetos</Link>
        </div>
      </nav>

      {/* Renderiza o conteúdo do Sobre direto na Home */}
      <SobrePage />
    </div>
  );
}
