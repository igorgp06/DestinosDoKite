import { useState } from "react";
import { Hero } from "./partials/Hero";
import { Select } from "./partials/Select";
import { Filter } from "./partials/Filter";
import { Footer } from "../../../components/Footer";

export const Destinos = () => {
    const [estadoSelecionado, setEstadoSelecionado] = useState("");

    return (
        <div className="flex flex-col">
            
            <main className="min-h-screen flex items-center justify-center bg-background" id="hero">
                <Hero />
            </main>

            <section
                id="select"
                className="min-h-screen flex items-center justify-center bg-primary"
            >
                <Select onSelectEstado={setEstadoSelecionado} />
            </section>

            <section
                className="min-h-screen flex items-center justify-center bg-background"
                id="filter"
            >
                <Filter estadoSelecionado={estadoSelecionado} />
            </section>

            <footer className="p-4 bg-background">
                <Footer />
            </footer>
            
        </div>
    );
};