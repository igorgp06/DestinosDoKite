import { cn } from "../../../../lib/utils";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29" id="home">
            <div className="container max-w-3xl mx-auto text-center z-10">

                <div className="space-y-8">
                    <div className="space-y-1">

                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground opacity-0 animate-fade-in-delay-1">
                            ENTRE EM CONTATO
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground opacity-0 animate-fade-in-delay-2 hover:text-glow transition-all duration-300">
                            TORNE-SE UM PARCEIRO
                        </h2>
                    </div>

                    <div>
                        <p className="text-base sm:text-lg text-primary-foreground opacity-0 animate-fade-in-delay-3">
                            Entre em contato com a gente, torne-se um parceiro e tenha sua escola no maior guia de kite surf de todo o Brasil!
                            Forme parcerias incríveis, conecte-se com a comunidade de kite surf e ajude a promover esse esporte apaixonante.
                        </p>
                    </div>

                    <div className="opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row justify-center gap-4">
                        <button className={cn("inline-block px-6 py-2 bg-background text-primary-foreground font-semibold",
                            "rounded-md shadow-md border border-primary-foreground",
                            "hover:bg-primary-foreground/85 hover:text-glow hover:text-black hover:scale-105 transition-all duration-300")}
                            onClick={() => window.location.href = 'https://www.instagram.com/destinosdokite/'}

                        >
                            Siga-nos no Instagram
                        </button>

                        <button className={cn("inline-block px-6 py-2 bg-background text-primary-foreground font-semibold",
                            "rounded-md shadow-md border border-primary-foreground",
                            "hover:bg-primary-foreground/85 hover:text-glow hover:text-black hover:scale-105 transition-all duration-300")}
                            onClick={() => window.location.href = '#'}

                        >
                            Nosso WhatsApp
                        </button>
                    </div>

                </div>


                <a href="#partners" className="absolute bottom-10 left-0 right-0 flex flex-col items-center text-primary-foreground opacity-75 animate-bounce z-16">
                    <span className="text-sm text-primary-foreground mb-1">Veja Mais</span>
                    <span className="hover:scale-1.10 transition-transform duration-300">
                        <ArrowDown className="h-5 w-5 text-primary-foreground transition-transform duration-300" />
                    </span>
                </a>

            </div>
        </div >
    )
}