import { Hero } from "./partials/Hero";
import { Filter } from "./partials/Filter";
import { Footer } from "../../../components/Footer";

export const Destinos = () => {

    return (
        <div className="flex flex-col">
            <main id="hero" className="min-h-screen flex items-center justify-center bg-primary">
                <Hero />
            </main>

            <section className="min-h-screen flex items-center justify-center bg-background" id="filter">
                <Filter />
            </section>

            <footer className="p-4 bg-background">
                <Footer />
            </footer>

        </div>
    );
};