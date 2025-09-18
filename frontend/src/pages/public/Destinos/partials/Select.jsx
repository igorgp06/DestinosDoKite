import { cn } from "../../../../lib/utils";
import { useState } from "react";

export const Select = ({ onSelectEstado }) => {
    const [estado, setEstado] = useState("");

    const handleFiltrar = () => {
        if (!estado) return;
        onSelectEstado(estado);
        requestAnimationFrame(() => {
            const el = document.getElementById("filter");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    };

    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29 mt-8">
            <div className="container max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 animate-fade-in-delay-1 opacity-0">
                    Destinos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold animate-fade-in-delay-2 opacity-0">
                            Descubra as melhores escolas de kitesurf presentes no Brasil.
                        </h3>
                        <p className="text-base sm:text-lg text-primary-foreground animate-fade-in-delay-3 opacity-0">
                            Aqui você encontra as melhores escolas de kitesurf espalhadas pelo
                            Brasil. Filtre todas as escolas de kitesurf por estados e por época
                            do ano para encontrar a escola ideal para suas viagens.
                        </p>
                    </div>

                    <div className="flex item-center justify-center animate-fade-in-delay-4 opacity-0">
                        <div className="w-full h-auto p-12 flex justify-center border bg-card flex-col text-center border-rounded-lg shadow-lg">
                            <p className="text-lg text-primary-foreground/90">
                                Escolha um estado para filtrar todas as escolas de kitesurf.
                            </p>
                            <select
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                className="border rounded-lg px-4 py-2 mt-2 bg-background text-primary-foreground w-full"
                            >
                                <option value="">Selecione um estado</option>
                                <option value="24">Santa Catarina</option>
                                <option value="19">Rio de Janeiro</option>
                            </select>
                            <button
                                onClick={handleFiltrar}
                                className={cn(
                                    "mt-4 p-2 bg-primary text-primary-foreground",
                                    "font-semibold rounded-md shadow-md border",
                                    "border-primary-foreground hover:bg-background hover:text-glow transition-all duration-300 w-full"
                                )}
                                type="button"
                            >
                                Filtrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
