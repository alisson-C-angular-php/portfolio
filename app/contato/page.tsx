export default async function ContatoPage() {
  const contatos = [
    {
      tipo: "E-mail",
      valor: "alissonpereiraa069@gmail.com",
      link: "mailto:alissonpereiraa069@gmail.com",
      icone: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      descricao: "Para propostas profissionais e parcerias"
    },
    {
      tipo: "GitHub",
      valor: "alisson-C-angular-php",
      link: "https://github.com/alisson-C-angular-php",
      icone: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      descricao: "Meus projetos e atualizações de código"
    },
    {
      tipo: "LinkedIn",
      valor: "linkedin.com/in/alisson-pereira-developer/",
      link: "https://www.linkedin.com/in/alisson-pereira-developer/",
      icone: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      descricao: "Conecte-se profissionalmente"
    }
  ];

 const areasInteresse = [
  "Desenvolvimento de APIs",
  "Sistemas Corporativos",
  "Backend e Integrações",
  "Banco de Dados",
  "Cloud e Deploy"
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header className="mb-12 text-center">
          <h1 className="translate-y-5 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Entre em Contato
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Vamos conversar sobre projetos, oportunidades e ideias inovadoras
          </p>
        </header>

        {/* Card de Introdução */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="space-y-4">
            <p className="text-lg text-white leading-relaxed text-justify">
Sou Desenvolvedor Backend e Full Stack focado em sistemas corporativos, APIs e aplicações orientadas a dados. 
Atuo criando, mantendo e modernizando soluções que empresas utilizam no dia a dia para operar seus processos.
</p>

<p className="text-lg text-white leading-relaxed text-justify">
Se sua empresa precisa de alguém para desenvolver ou sustentar sistemas, criar APIs, integrar serviços ou trabalhar com banco de dados, 
estou pronto para contribuir com código limpo, performance e arquitetura bem definida.
</p>

          </div>
        </div>

        {/* Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {contatos.map((contato) => (
            <a
              key={contato.tipo}
              href={contato.link}
              target={contato.tipo !== "E-mail" ? "_blank" : "_self"}
              rel={contato.tipo !== "E-mail" ? "noopener noreferrer" : ""}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <div className="text-white">
                    {contato.icone}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {contato.tipo}
                  </h3>
                  <p className="text-white/90 font-medium">
                    {contato.valor}
                  </p>
                </div>
                
                <p className="text-sm text-white/70">
                  {contato.descricao}
                </p>
                
                <div className="pt-2">
                  <span className="inline-flex items-center text-white text-sm font-medium">
                    Acessar
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Áreas de Interesse */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Áreas de Interesse
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {areasInteresse.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Mensagem Final */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-white">
              Pronto para Iniciar um Projeto?
            </h3>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Normalmente respondo em até 24 horas. Não hesite em entrar em contato 
              para discutir sua ideia ou projeto - estou aqui para ajudar a torná-lo realidade.
            </p>
            
            <div className="pt-4">
              <a
                href="mailto:alissonpereiraa069@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                Iniciar Conversa
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}