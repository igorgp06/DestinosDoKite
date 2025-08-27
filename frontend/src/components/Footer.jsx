import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <div className="relative flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="space-y-2 text-center md:text-left flex flex-col">
                <p className="text-sm text-primary-foreground/90">
                    &copy; {new Date().getFullYear()} Destinos do Kite. Todos os direitos reservados.
                </p>
                <p className="text-xs text-primary-foreground/75">
                    Desenvolvido por{" "}
                    <a
                        href="https://igdeveloper.com.br"
                        target="_blank"
                        className="underline hover:text-primary-foreground transition-all duration-300"
                    >
                        Igor Gonçalves | DEV
                    </a>.
                </p>
            </div>

            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
            >
                <ArrowUp />
            </a>
        </div>
    );
};
