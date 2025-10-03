import { cn } from "../../../../lib/utils"

export const Form = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29" id="home">
            <div className="container max-w-3xl mx-auto text-center z-10">

                <div className="space-y-8">
                    <div className="space-y-1 mb-12">

                        <h2 className="text-3xl font-bold text-primary-foreground">
                            Fale Conosco
                        </h2>
                        <h3 className="text-md text-primary-foreground">
                            Envie uma Mensagem diretamente pra nós, seja ela uma sugestão, dúvida ou pedido! Assim que possível, entraremos em contato.
                        </h3>
                    </div>

                    <div className="w-full bg-card p-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-md font-semibold text-primary-foreground mb-2">
                                    Seu Nome
                                </label>
                                <input type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Fulano da Silva"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-primary-foreground" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-md font-semibold text-primary-foreground mb-2">
                                    Seu Email
                                </label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="fulano@email.com"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-primary-foreground" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-md font-semibold text-primary-foreground mb-2">
                                    Sua Mensagem
                                </label>
                                <textarea id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Escreva sua mensagem aqui..."
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background text-primary-foreground">
                                </textarea>
                            </div>
                            <div className="text-sm text-primary-foreground">
                                <button className={cn("inline-block w-full py-3 bg-background text-primary-foreground font-semibold",
                                    "rounded-md shadow-md border border-primary-foreground",
                                    "hover:bg-primary-foreground/85 hover:text-glow hover:text-black hover:scale-102 transition-all duration-300"
                                )}
                                    type="submit"
                                >
                                    Enviar Mensagem

                                </button>
                            </div>
                        </form>


                    </div>



                </div>
            </div>
        </div>
    )
}