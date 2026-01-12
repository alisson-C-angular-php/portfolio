export default async function ProjetosPage() {
  return (
    <main className="px-6 py-12 min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <header className="mt-5 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Projetos
        </h1>
        <p className="text-lg text-white/80">
          Página dedicada aos meus projetos.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        
        {/* CARD 1 */}
        <article className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/15">
          <img
            className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            src="/images/gerenciadorhoraextra.png"
            alt="Sistema gerenciador de hora extra"
          />

          <div className="mt-5">
            <h2 className="font-bold text-xl mb-3 text-white">
              Sistema gerenciador de hora extra
            </h2>

            <p className="text-white/90 text-sm text-justify">
              Sistema digital para otimizar a gestão de horas extras, abordando tanto aspectos operacionais quanto gerenciais.
            </p>

            <a
              href="https://github.com/alisson-C-angular-php/bertoti/tree/main/portfolio-bd/3-semestre"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg"
            >
              Ver projeto
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </article>

        {/* CARD 2 */}
        <article className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/15">
          <img
            className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            src="/images/dashboardinteirativo.png"
            alt="Dashboard interativo"
          />

          <div className="mt-5">
            <h2 className="font-bold text-xl mb-3 text-white">
              Dashboard Interativo de Recrutamento
            </h2>

            <p className="text-white/90 text-sm text-justify">
              Plataforma modular para análise de dados em tempo real, permitindo visualização dinâmica de métricas e indicadores de desempenho.
            </p>

            <a
              href="https://github.com/alisson-C-angular-php/bertoti/tree/main/portfolio-bd/5-semestre"
              target="_blank"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg"
            >
              Ver projeto
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </article>

        {/* CARD 3 */}
        <article className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 max-w-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/15">
          <img
            className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            src="/images/colheita.png"
            alt="Indicadores inteligentes"
          />

          <div className="mt-5">
            <h2 className="font-bold text-xl mb-3 text-white">
              Indicadores Inteligentes de Reflorestamento
            </h2>

            <p className="text-white/90 text-sm text-justify">
              Sistema inteligente para planejamento e monitoramento de reflorestamento, com base em dados de plantio e previsões.
            </p>

            <a
              href="https://github.com/alisson-C-angular-php/bertoti/tree/main/portfolio-bd/6-semestre"
              target="_blank"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg"
            >
              Ver projeto
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </article>

      </section>
    </main>
  );
}
