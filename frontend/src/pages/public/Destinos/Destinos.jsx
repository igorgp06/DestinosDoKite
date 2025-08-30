import { useState } from "react";
import { Hero } from "./partials/Hero";
import { Filter } from "./partials/Filter";
import { Footer } from "../../../components/Footer";

export const Destinos = () => {
    const [estadoSelecionado, setEstadoSelecionado] = useState("");

    return (
        <div className="flex flex-col">
            <main
                id="hero"
                className="min-h-screen flex items-center justify-center bg-primary"
            >
                <Hero onSelectEstado={setEstadoSelecionado} />
            </main>

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