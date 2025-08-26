import { Hero } from "./partials/Hero";
import { About } from "./partials/About";
import { More } from "./partials/More";
import { Footer } from "../../../components/Footer";

// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HomePage = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div className="flex flex-col">
            <main id="hero" className="min-h-screen flex items-center justify-center bg-background">
                <Hero />
            </main>

            <motion.section
                id="about"
                className="min-h-screen flex items-center justify-center bg-primary"
                ref={ref}
                style={{ opacity }}
            >
                <About />
                {children}
            </motion.section>

            <section id="more" className="min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center bg-primary">
                <More />
            </section>

            <footer className="p-4 bg-background">
                <Footer />
            </footer>

        </div>
    );
};