import Link from "next/link";

export default function Navbar() {
  return (
  
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md px-6 py-4">
          <div className="mx-auto max-w-7xl flex items-center justify-center gap-12 text-2xl">
            <Link href="/sobre" className="text-white hover:underline">
               Sobre
            </Link>
            <Link href="/contato" className="text-white hover:underline">
              Contato
            </Link>

            <Link href="/projetos" className="text-white hover:underline">
              Projetos
            </Link>
          </div>
        </nav>

  );
}