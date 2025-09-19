import { useState, useEffect } from "react";
import Map from "./components/Map";
import SchoolCard from "./components/SchoolCard";
import SchoolDetails from "./components/SchoolDetails";
import { cn } from "../../../../lib/utils";

export const Filter = ({ estadoSelecionado }) => {
    const [escolas, setEscolas] = useState([]);
    const [selecionada, setSelecionada] = useState(null);

    useEffect(() => {
        if (!estadoSelecionado) return;

        const fetchData = async () => {
            const res = await fetch("/assets/static/JSON/schools/schools.json");
            const data = await res.json();
            setEscolas(data.filter((e) => e.state ===
                (estadoSelecionado)));
        };

        fetchData();
    }, [estadoSelecionado]);

    if (!estadoSelecionado) {
        return (
            <div className="relative min-h-screen flex flex-col align-center justify-center px-4 py-12">
                <p className="text-lg">Selecione um estado acima para começar</p>
                <a href="#hero" className={cn("inline-block px-6 py-2 bg-background text-primary-foreground font-semibold",
                    "rounded-md shadow-md border border-primary-foreground mt-4",
                    "hover:bg-primary hover:text-glow hover:scale-105 transition-all duration-300")}>Voltar para o topo</a>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29 mt-8">
            <div className="container max-w-6xl mx-auto text-center">

                <div className="grid grid-cols-1 gap-8 items-center mb-8">

                    <div className="w-full max-w-6xl">
                        <h2 className="text-2xl font-bold mb-4">Escolas de Kitesurf</h2>

                        <div className="grid grid-cols-1 gap-12 items-center">
                            <div className="col-span-1  md:w-[50%]">
                                <Map escolas={escolas} estadoSelecionado={estadoSelecionado} />
                            </div>
                            <div className="col-span-1 space-y-6 w-full">
                                {escolas.length > 0 ? (
                                    escolas.map((e) => (
                                        <SchoolCard key={e.id} escola={e} onClick={() => setSelecionada(e)} />
                                    ))
                                ) : (
                                    <p>Nenhuma escola encontrada para este estado.</p>
                                )}
                            </div>
                        </div>

                        {selecionada && (
                            <SchoolDetails escola={selecionada} onClose={() => setSelecionada(null)} />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};
