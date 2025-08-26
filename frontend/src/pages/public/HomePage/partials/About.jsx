import { cn } from "../../../../lib/utils"

export const About = () => {
    return (
        <div className="relative min-h-[80vh] flex flex-col align-center justify-center px-4" id="about">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <h2 className="text-3xl md:text-4x1 font-bold mb-12 text-center text-primary-foreground">
                    Quem Somos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    <div className="p-0 m-0">
                        <div className="flex item-center justify-center flex-col gap-2 border bg-card card-hover">
                            <div className="flex item-center justify-center">
                                <img
                                    src="/assets/static/imgs/pages/HomePage/homePage-card-2.webp"
                                    alt="Foto do Arthur e da Ju"
                                    className="max-w-80 max-h-80 object-cover hover:rounded-t-xl hover:scale-101 transition-all duration-300"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-primary-foreground">Seja bem-vindo(a)!</h3>
                                <p className="text-primary-foreground/80">
                                    Nós somos o Arthur e a Ju! Moramos em Imbituba - SC, perto da incrível Lagoa de Ibiraquera, e somos apaixonados por Kitesurf.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-0 m-0">
                        <div className="flex item-center justify-center flex-col gap-2 border bg-card card-hover">
                            <div className="flex item-center justify-center">
                                <img
                                    src="/assets/static/imgs/pages/HomePage/homePage-card-1.webp"
                                    alt="Foto de umas das aulas de kite"
                                    className="max-w-80 max-h-80 object-cover hover:rounded-t-xl hover:scale-101 transition-all duration-300"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-primary-foreground">Nossa Missão</h3>
                                <p className="text-primary-foreground/80">
                                    Criamos este perfil com o objetivo de compartilhar nossa paixão pelo kite e ajudar você a descobrir os melhores picos de velejo pelo Brasil.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-primary-foreground/90">
                    <div className="grid grid-cols-1 gap-8 items-center">
                        <div className="space-y-6">
                            <p>
                                A nossa missão vai além de mostrar simplesmente locais; queremos proporcionar a experiência completa de quem pratica o esporte e se conecta com a natureza, o vento e as ondas. Veja mais sobre nós em nosso Instagram!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <button className={cn("inline-block px-6 py-2 bg-primary text-primary-foreground font-semibold", "rounded-md shadow-md border border-primary-foreground",
                                "hover:bg-background hover:text-glow transition-all duration-300")}
                                onClick={() => window.location.href = 'https://www.instagram.com/destinosdokite/'}

                            >
                                Siga-nos no Instagram
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}