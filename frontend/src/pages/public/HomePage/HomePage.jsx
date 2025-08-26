import { Hero } from "./partials/Hero";
import { About } from "./partials/About";
import { More } from "./partials/More";

export const HomePage = () => {
    return (
        <div className="flex flex-col">
            <main id="hero" className="min-h-screen flex items-center justify-center bg-background">
                <Hero />
            </main>

            <section id="about" className="min-h-screen flex items-center justify-center bg-primary">
                <About />
            </section>

            <section id="more" className="min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center bg-primary">
                <More />
            </section>

        </div>
    );
};