import { useState, useEffect } from "react";

export const Filter = () => {
    const [escolas, setEscolas] = useState([]);

    const buscarEscolas = async () => {
        try {
            const query = new URLSearchParams();
            if (estado) query.append("estado", estado);
            if (temporada) query.append("temporada", temporada);

            const response = await fetch(`/api/escolas?${query.toString()}`);
            const data = await response.json();
            setEscolas(data);
        } catch (error) {
            console.error("Erro ao buscar escolas:", error);
        }
    };

    useEffect(() => {
        buscarEscolas();
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Escolas de Kitesurf</h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {escolas.length > 0 ? (
                    escolas.map((e) => (
                        <div key={e.id} className="p-4 border rounded-lg shadow-md bg-card">
                            <h3 className="text-lg font-semibold">{e.nome}</h3>
                            <p className="text-sm text-primary-foreground/80">{e.estado}</p>
                            <p className="text-sm">{e.temporada}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhuma escola encontrada.</p>
                )}
            </div>
        </div>
    );
};
