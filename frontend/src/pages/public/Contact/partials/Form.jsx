import { MessageCircle, MapPin, MailIcon } from "lucide-react"
import { cn } from "../../../../lib/utils"

export const Form = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29" id="home">
            <div className="container max-w-5xl mx-auto text-center z-10">

                <div className="space-y-8">
                    <div className="space-y-1 mb-12">

                        <h2 className="text-3xl font-bold text-primary-foreground">
                            Fale Conosco
                        </h2>
                        <h3 className="text-md text-primary-foreground">
                            Envie uma Mensagem diretamente pra nós, <br />seja ela uma sugestão, dúvida ou pedido! Assim que possível, entraremos em contato.
                        </h3>
                    </div>




                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">


                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

                            <div className="space-y-6">

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/50">
                                        <MessageCircle className="w-6 h-6 text-primary-foreground" /> {" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-start">Telefone</h4>
                                        <a href="https://wa.me/5548920014986" target="_blank" className="text-primary-foreground hover:text-primary-foreground/85  transition-colors duration-300 underline">
                                            +55 (48) 9999-9999
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/50">
                                        <MailIcon className="w-6 h-6 text-primary-foreground" /> {" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-start">Email</h4>
                                        <a href="mailto:destinosdokite@gmail.com" className="text-primary-foreground hover:text-primary-foreground/85  transition-colors duration-300 underline">
                                            destinosdokite@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/50">
                                        <MapPin className="w-6 h-6 text-primary-foreground" /> {" "}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-start">Localização</h4>
                                        <a href="https://maps.app.goo.gl/grnEepkGwuXavEDM7" target="_blank" className="text-primary-foreground hover:text-primary-foreground/85 transition-colors duration-300 underline">
                                            Imbituba, Santa Catarina - Brasil
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div>
                                        <p className="font-medium text-center">
                                            Você também pode enviar uma mensagem diretamente para nós através do formulário ao lado!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                            <div className="flex flex-col w-full bg-card p-10 rounded-lg hover:scale-101 shadow-md hover:shadow-lg transition-all duration-300">
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
            </div>
            )
}