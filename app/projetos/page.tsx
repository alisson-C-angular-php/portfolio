export default async function ProjetosPage({

}: {

    }) {


    return (
        <div className=" px-6 py-12 min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ">
            <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white translate-y-5">Projetos</h1>
                <div className="text-lg text-gray-600 text-white">
                    Página dedicada aos meus projetos.
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                        className="w-full h-48 object-cover" 
                        src="/images/gerenciadorhoraextra.png" 
                        alt="Sistema gerenciador de hora extra" 
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Sistema gerenciador de hora extra</div>
                        
                        <a 
                            href="https://github.com/alisson-C-angular-php/bertoti/tree/main/portfolio-bd/3-semestre" 
                            className="text-blue-500 hover:underline mb-3 block font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Veja mais →
                        </a>
                        
                        <p className="text-gray-700 text-base">
                            Sistema digital para otimizar a gestão de horas extras, abordando tanto aspectos operacionais quanto gerenciais.
                        </p>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                        className="w-full h-48 object-cover" 
                        src="/images/dashboardinteirativo.png" 
                        alt="Projeto de Dashboard Interativo para Análise de Dados de Recrutamento e Seleção" 
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Projeto de Dashboard Interativo para Análise de Dados de Recrutamento e Seleção</div>
                        
                        <a 
                            href="https://github.com/alisson-C-angular-php/bertoti/tree/main/portfolio-bd/5-semestre" 
                            className="text-blue-500 hover:underline mb-3 block font-medium"
                        >
                            Veja mais →
                        </a>
                        
                        <p className="text-gray-700 text-base">
                            Uma solução completa de Dashboard Interativo e Modular que oferece uma experiência robusta e personalizável para análise de dados em tempo real. A plataforma foi projetada para atender às necessidades de organizações que necessitam de visualização dinâmica de métricas e indicadores de desempenho
                        </p>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img 
                        className="w-full h-48 object-cover" 
                        src="/images/colheita.png" 
                        alt="Terceiro projeto" 
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Projeto de Indicadores Inteligentes para Análise de Dados</div>
                        
                        <a 
                            href="https://github.com/alisson-C-angular-php/bertoti/tree/main/portfolio-bd/6-semestre" 
                            className="text-blue-500 hover:underline mb-3 block font-medium"
                        >
                            Veja mais →
                        </a>
                        
                        <p className="text-gray-700 text-base">
                            Este projeto visa desenvolver um sistema inteligente para planejamento e monitoramento de reflorestamento, utilizando uma base de dados de plantio para prever padrões de crescimento, sugerir melhores estratégias de recuperação ambiental e monitorar a evolução das áreas reflorestadas.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}