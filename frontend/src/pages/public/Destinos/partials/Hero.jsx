import { cn } from "../../../../lib/utils";

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29">
            <div className="container max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl opacity-0 font-bold tracking-tight text-white mb-4 animate-fade-in-delay-1">
                    Destinos
                </h2>

                <div className="grid grid-cols-2 gap-8 items-center mb-8">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold opacity-0 animate-fade-in-delay-2">Descubra as melhores escolas de kitesurf presentes no Brasil. </h3>
                        <p className="text-base sm:text-lg opacity-0 text-primary-foreground animate-fade-in-delay-3">
                            Aqui você encontra as melhores escolas de kitesurf espalhadas pelo Brasil.
                            Filtre todas as escolas de kitesurf por estados e por época do ano
                            para encontrar a escola ideal para suas viagens.
                        </p>
                    </div>

                    <div className="flex item-center justify-center">
                        <div className="w-full h-auto p-12 flex justify-center border bg-card flex-col text-center border-rounded-lg shadow-lg opacity-0 animate-fade-in-delay-4">
                            <p className="text-lg text-primary-foreground/90">
                                Escolha um estado e/ou uma época do ano para filtrar todas as escolas de kitesurf de acordo com as suas preferências.
                            </p>
                            <select name="states-filter" id="states-filter"
                                className="border rounded-lg px-4 py-2 mt-2 bg-background text-primary-foreground w-full">
                                <option value="" disabled selected>Selecione um estado</option>
                                <option value="19" name="SC">Santa Catarina</option>
                                <option value="24" name="RJ">Rio de Janeiro</option>
                            </select>
                            <button className={cn("mt-4 p-2 bg-primary text-primary-foreground",
                                "font-semibold rounded-md shadow-md border",
                                "border-primary-foreground hover:bg-background hover:text-glow transition-all duration-300 w-full")}
                                type="button"
                            >
                                <a href="#filter" className="block w-full">Filtrar</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}