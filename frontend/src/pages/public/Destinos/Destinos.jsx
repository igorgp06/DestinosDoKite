import { Hero } from "./partials/Hero";
import { Footer } from "../../../components/Footer";

export const Destinos = () => {

    return (
        <div className="flex flex-col">
            <main id="hero" className="min-h-screen flex items-center justify-center bg-primary">
                <Hero />
            </main>


            <footer className="p-4 bg-background">
                <Footer />
            </footer>

        </div>
    );
};