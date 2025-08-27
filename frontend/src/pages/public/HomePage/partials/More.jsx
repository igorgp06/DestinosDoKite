
export const More = () => {
    return (
        <div className="relative flex flex-col align-center justify-center px-4" id="more">
            <div className="container max-w-6xl mx-auto text-center z-10">
                <h2 className="text-3xl md:text-5xl font-bold m-8 text-center text-primary-foreground">
                    Mais Sobre Nós
                </h2>

                <div className="grid grid-cols-2 gap-12 items-center">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mt-2 text-2xl font-semibold flex items-center gap-2 justify-center">Nossa Ideia</h3>
                        <p className="text-1lg">
                            A ideia é criar um guia completo de kite que explore tanto os destinos mais conhecidos quanto os melhores e mais irados picos escondidos pelo Brasil.
                        </p>

                        <p className="text-1lg color-primary-foreground/90 mt-4">
                            Nosso projeto também é uma plataforma colaborativa. Estamos conectados com parceiros incríveis que compartilham da nossa visão de que o kitesurf é mais do que um esporte – é uma forma de vida, uma forma de se libertar, explorar e se conectar com o mundo. A cada destino que visitamos, trazemos informações detalhadas, imagens inspiradoras e experiências de quem já passou por lá, tudo para ajudar você a planejar sua próxima viagem de kite.
                        </p>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="mt-2 text-2xl font-semibold flex items-center gap-2 justify-center">Instrutores</h3>
                        <p className="text-1lg color-primary-foreground/90">
                            Arthur, como instrutor de kitesurf, traz não só a experiência técnica de quem ensina e conhece os desafios do esporte, mas também dicas práticas para quem quer melhorar ou aprender a velejar. A Ju, com seu olhar de exploradora, ajuda a capturar a essência de cada lugar e a mostrar como cada destino tem algo único a oferecer, seja para quem busca uma aventura tranquila ou uma experiência intensa.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center text-primary-foreground/90 pb-4">
                    <div className="grid grid-cols-1 gap-8 items-center">
                        <div className="space-y-6 bg-card p-2 border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:backdrop-blur-2xl">
                            <p className="text-1lg color-primary-foreground/90">
                                Além disso, estamos sempre em busca de novas parcerias e oportunidades de colaboração com marcas e pessoas que acreditam que o kitesurf tem o poder de transformar vidas. Ao criar conteúdos divertidos, dinâmicos e com muito bom humor, queremos levar mais pessoas a viverem a magia desse esporte, seja nas águas calmas do litoral ou nas condições desafiadoras dos picos mais radicais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}