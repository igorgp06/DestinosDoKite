import { Hero } from "./partials/Hero";
import { Partners } from "./partials/Partners";
import { Footer } from "../../../components/Footer";

export const Contact = () => {

    return (
        <div className="flex flex-col">
            <main id="hero" className="min-h-screen flex items-center justify-center bg-primary">
                <Hero />
            </main>

            <section className="min-h-screen flex items-center justify-center bg-background" id="partners">
                <Partners />
            </section>

            <footer className="p-4 bg-background">
                <Footer />
            </footer>

        </div>
    );
};