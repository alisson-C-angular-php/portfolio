export default async function SobrePage() {
  const tecnologias = [
    { categoria: "Backend", items: ["PHP", "C#", "Java", "Laravel", "Spring Boot", "Nest.js"] },
    { categoria: "Frontend", items: ["JavaScript", "TypeScript", "Vue.js", "Angular", "React", "Next.js", "jQuery", "HTML/CSS"] },
    { categoria: "Banco de Dados", items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"] },
    { categoria: "DevOps & Cloud", items: ["Linux", "Shell Script", "Docker", "AWS", "Git", "SSH/SFTP"] },
    { categoria: "Testes & Qualidade", items: ["Testes Unitários", "Testes de Integração", "Jest", "PHPUnit"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header className="mb-12 text-center">
          <h1 className="translate-y-5 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Sobre Mim
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Desenvolvedor Full Stack especializado em soluções escaláveis e de alta performance
          </p>
        </header>

        {/* Conteúdo Principal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="space-y-6">

            <p className="text-lg text-white leading-relaxed text-justify">
              Sou Desenvolvedor Backend e Full Stack com foco em sistemas corporativos, APIs e aplicações orientadas a dados.
              Tenho formação técnica em Automação Industrial e atualmente curso Tecnólogo em Banco de Dados.
            </p>

            <p className="text-lg text-white leading-relaxed text-justify">
              Atuo no desenvolvimento, manutenção e modernização de aplicações utilizadas por empresas, incluindo sistemas internos, plataformas web, APIs REST e integrações entre serviços.
            </p>

            <p className="text-lg text-white leading-relaxed text-justify">
              Tenho experiência prática com PHP, C#, Java, SQL Server, MySQL, Docker e cloud, trabalhando com lógica de negócio, banco de dados, arquitetura e boas práticas de desenvolvimento.
            </p>

            <p className="text-lg text-white leading-relaxed text-justify">
              Meu objetivo é ajudar empresas a operarem melhor através de software confiável, organizado e escalável, contribuindo com código de qualidade e visão de produto.
            </p>

          </div>
        </div>

        {/* Tecnologias */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Tecnologias que Domino
          </h2>

          <div className="space-y-6">
            {tecnologias.map((categoria) => (
              <div key={categoria.categoria}>
                <h3 className="text-xl font-semibold mb-3 text-purple-100">
                  {categoria.categoria}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categoria.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contato */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Vamos Conversar!
          </h2>

          <div className="text-center space-y-4">
            <p className="text-lg text-white">
              Gostou do meu perfil ou tem algum projeto em mente?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:alissonpereiraa069@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                alissonpereiraa069@gmail.com
              </a>

              <a
                href="https://github.com/alisson-C-angular-php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            <p className="text-sm text-white/80 mt-4">
              Estou sempre aberto a novas oportunidades e parcerias
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}