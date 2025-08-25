import { Hero } from "./Hero";
import { About } from "./About";

export const HomePage = () => {
    return (
        <div className="flex flex-col">
            <section id="hero" className="min-h-screen flex items-center justify-center bg-background">
                <Hero />
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center bg-primary">
                <About />
            </section>

        </div>
    );
};