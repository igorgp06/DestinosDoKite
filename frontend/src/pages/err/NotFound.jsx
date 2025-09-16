import { Link } from "react-router-dom"
import { cn } from "../../lib/utils"

export const NotFound = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29">
            <div className="container max-w-4xl mx-auto text-center z-10">

                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Erro 404 - Página Não Encontrada
                </h1>

                <p className="text-3lg mb-8 font-bold ">
                    A página que você está procurando não existe. Por favor, verifique o endereço da URL e tente novamente.
                </p>

                <Link to="/" className={cn("inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold",
                    "rounded-md shadow-md border border-primary-foreground",
                    "hover:bg-primary-foreground/50 hover:text-primary hover:text-glow hover:scale-105 transition-all duration-300"
                )}>
                    Voltar para a página inicial
                </Link>

            </div>
        </div>
    )
}