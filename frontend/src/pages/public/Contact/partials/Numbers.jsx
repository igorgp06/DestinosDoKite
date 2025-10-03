
export const Numbers = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29" id="home">
            <div className="container max-w-3xl mx-auto text-center z-10">

                <div className="space-y-8">
                    <div className="space-y-1">


                        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground opacity-0 animate-fade-in-delay-1 hover:text-glow transition-all duration-300">
                            Como Surgiu?
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 gap-12 items-center">
                        <div className="col-span-2 md:col-span-1">
                            <h3 className="mt-2 text-2xl font-semibold flex items-center gap-2 justify-center">
                                Nossa Ideia
                            </h3>
                            <p className="text-1lg">
                                Em 2023 criamos um perfil no instagram para
                                compartilhar nossas experiências no kitesurf
                                e desbravar, juntos, os muitos destinos que o
                                kite pode nos levar.
                            </p>

                            <ul className="text-1lg color-primary-foreground/90 list-inside mt-4 bg-card p-2 border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:backdrop-blur-2xl list-none">
                                <li className="mt-2 text-2xl font-semibold flex items-center gap-2 justify-center mb-2">
                                    Engajamento
                                </li>

                                <li className="mb-2 italic">
                                    <span className="font-semibold not-italic">Seguidores:</span> +6.480
                                </li>

                                <li className="mb-2 italic">
                                    <span className="font-semibold not-italic">Alcance:</span> 1.159.831 visualizações
                                </li>

                                <li className="mb-2 italic">
                                    <span className="font-semibold not-italic">Reels com o maior alcance:</span> 1.2 milhão de visualizações
                                </li>

                                <li className="mb-2 italic">
                                    <span className="font-semibold not-italic">Público alvo:</span> Brasil - Com foco no KiteSurf e Viagens
                                </li>
                            </ul>

                        </div>

                        <div className="col-span-2 md:col-span-1">

                            <p className="text-1lg color-primary-foreground/90 mt-4 bg-card p-4 border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:backdrop-blur-2xl">
                                Acreditamos em parcerias construídas com propósito, alinhadas com a
                                essência do nosso conteúdo e com o estilo de vida que promovemos.
                            </p>

                            <p className="text-1lg color-primary-foreground/90 mt-4 bg-card p-2 border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:backdrop-blur-2xl">

                                Nosso público vem crescendo de forma orgânica, formado por pessoas
                                que compartilham do mesmo interesse por kitesurf, viagens e
                                experiências autênticas.
                            </p>

                            <p className="text-1lg color-primary-foreground/90 mt-4 bg-card p-4 border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:backdrop-blur-2xl">
                                É uma audiência nichada, engajada e conectada com o universo do
                                vento, do mar e da aventura.
                            </p>
                        </div>
                    </div>

                </div>

            </div >
        </div >
    )
}