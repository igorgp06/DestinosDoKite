import { ArrowDown, Instagram, MessageCircle } from "lucide-react"
import { cn } from "../../../../lib/utils"

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29 mt-8">
            <div className="container max-w-5xl mx-auto text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground opacity-0 animate-fade-in-delay-1">
                        DESTINOS
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-primary opacity-0 animate-fade-in-delay-2">
                        ENTENDA MAIS SOBRE O GUIA
                    </h2>
                </div>

                <div className="mt-6 space-y-6">
                    <p className="text-base sm:text-lg text-primary-foreground animate-fade-in-delay-3 opacity-0 ">
                        Neste espaço você pode encontrar todas as melhores escolas de kitesurf do Brasil.
                        Para utilizar nosso sistema basta escolher o estado o qual você deseja
                        visualizar as escolas e clicar em filtrar. Após isso, todas as escolas daquele estado
                        serão exibidas para você junto da sua localização num mapa interativo. <br />
                        Alguma escola te atraiu? Clique nela para ver mais detalhes, fotos e muito mais!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
                        <div className="bg-card card-hover shadow-lg rounded-lg p-6 animate-fade-in-delay-4 opacity-0">
                            <h3 className="mb-1 font-semibold text-lg animate-fade-in-delay-5 opacity-0">
                                Como funciona?
                            </h3>
                            <p className="text-md animate-fade-in-delay-5 opacity-0">
                                Escolha o estado que deseja ver as escolas e clique em filtrar. As escolas daquele estado serão 
                                automaticamente exibidas para você.
                            </p>
                        </div>

                        <div className="bg-card card-hover shadow-lg rounded-lg p-6 animate-fade-in-delay-5 opacity-0">
                            <h3 className="mb-1 font-semibold text-lg animate-fade-in-delay-6 opacity-0">
                                Como ver as escolas?
                            </h3>
                            <p className="text-md animate-fade-in-delay-6 opacity-0">
                                Após filtrar as escolas de um estado, clique na escola que deseja ver mais detalhes. 
                                Vai abrir um pop-up com todas as informações da escola.
                            </p>
                        </div>

                        <div className="bg-card card-hover shadow-lg rounded-lg p-4 animate-fade-in-delay-6 opacity-0 flex flex-col items-center">
                            <h3 className="mb-1 font-semibold text-lg animate-fade-in-delay-6 opacity-0">
                                Outras Dúvidas?
                            </h3>
                            <p className="text-md animate-fade-in-delay-6 opacity-0">
                                Fique a vontade para entrar em contato conosco através do nosso WhatsApp ou Instagram!
                            </p>
                            <div className="mt-2 flex flex-col md:flex-row justify-center gap-0">
                                <button className={cn("m-2 inline-block px-2 py-2 bg-background text-primary-foreground font-semibold",
                                    "rounded-md shadow-md border border-primary-foreground animate-fade-in-delay-6 opacity-0",
                                    "hover:bg-primary-foreground/85 hover:text-glow hover:text-black hover:scale-102 transition-all duration-300")}
                                    onClick={() => window.location.href = '#'}
                                >
                                    <MessageCircle />
                                </button>

                                <button className={cn("m-2 inline-block px-2 py-2 bg-background text-primary-foreground font-semibold",
                                    "rounded-md shadow-md border border-primary-foreground animate-fade-in-delay-6 opacity-0",
                                    "hover:bg-primary-foreground/85 hover:text-glow hover:text-black hover:scale-102 transition-all duration-300")}
                                    onClick={() => window.location.href = '#'}
                                >
                                    <Instagram />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center text-primary-foreground opacity-75 animate-bounce z-16">
                    <span className="text-sm text-primary-foreground mb-1">Veja Mais</span>
                    <a href="#select">
                        <ArrowDown className="h-5 w-5 text-primary hover:scale-1.10 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </div>
    )
} 