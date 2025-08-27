import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { cn } from "../../../../lib/utils";

export const Hero = () => {
    return (

        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29" id="home">

            <div className="container max-w-3xl mx-auto text-center z-10">
                <div className="space-y-8 ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        <span className="opacity-0 animate-fade-in-delay-1">
                            BEM VINDO AO GUIA
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2 hover:text-glow transition-all duration-300 block">
                            {"  "}
                            DESTINOS DO KITE
                        </span>
                    </h1>

                    <div>
                        <p className="text-base sm:text-lg text-primary-foreground opacity-0 animate-fade-in-delay-3">
                            Aqui você vai encontrar os melhores spots de velejo e as escolas de kitesurf mais incríveis espalhadas pelo Brasil! Nosso objetivo é facilitar sua jornada no mundo do kite, trazendo dicas dos picos mais irados, informações sobre as melhores condições de vento, e recomendações de escolas que vão te ajudar a aprender ou melhorar no esporte.
                        </p>
                    </div>
                </div>

                <div className="mt-10 opacity-1 animate-fade-in-delay-4 flex justify-center items-center gap-4 flex-wrap">
                    <Link
                        to="/destinos"
                        className={cn("inline-block px-4 py-3 bg-primary text-primary-foreground font-semibold", "rounded-md shadow-md border border-primary-foreground",
                            "hover:bg-background hover:text-glow transition-all duration-300"
                        )}
                    >
                        Explore os Destinos
                    </Link>

                    <Link
                        to="/contato"
                        className={cn("inline-block px-4 py-3 bg-background text-primary-foreground font-semibold", "rounded-md shadow-md border",
                            "border-primary-foreground hover:bg-primary hover:text-glow transition-all duration-300"
                        )}
                    >
                        Entre em Contato
                    </Link>

                </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center text-primary-foreground opacity-70 animate-bounce md:hidden z-10">
                <span className="text-sm text-primary-foreground mb-1">Veja Mais</span>
                <a href="#about">
                    <ArrowDown className="h-5 w-5 text-primary hover:scale-1.10 transition-transform duration-300" />
                </a>
            </div>
        </div>
    )
} 