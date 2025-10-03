import { Hero } from "./partials/Hero";
import { Numbers } from "./partials/Numbers";
import { Form } from "./partials/Form";
import { Footer } from "../../../components/Footer";

export const Contact = () => {

    return (
        <div className="flex flex-col">
            <main id="hero" className="min-h-screen flex items-center justify-center bg-primary">
                <Hero />
            </main>

            <section className="min-h-screen flex items-center justify-center bg-background" id="partners">
                <Numbers />
            </section>

            <section className="min-h-screen flex items-center justify-center bg-background" id="form">
                <Form />
            </section>

            <footer className="bg-background">
                <Footer />
            </footer>

        </div>
    );
};