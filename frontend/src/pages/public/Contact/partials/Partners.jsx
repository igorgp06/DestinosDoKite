
export const Partners = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4 pb-29" id="home">
            <div className="container max-w-3xl mx-auto text-center z-10">

                <div className="space-y-8">

                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground opacity-0 animate-fade-in-delay-1 hover:text-glow transition-all duration-300">
                        Nossos Parceiros
                    </h2>

                    <div className="space-y-1">
                        <h3 className="text-2xl font-semibold text-primary-foreground">
                            Escolas de Kitesurf
                        </h3>
                        <p className="text-md text-primary-foreground">
                            Conheça as escolas de kitesurf que fazem parte do nosso guia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Escola 1</h4>
                            <p className="text-sm">Descrição da Escola 1</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Escola 2</h4>
                            <p className="text-sm">Descrição da Escola 2</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Escola 3</h4>
                            <p className="text-sm">Descrição da Escola 3</p>
                        </div>

                    </div>

                </div>

                <div className="space-y-8 mt-16">

                    <div className="space-y-1">
                        <h3 className="text-2xl font-semibold text-primary-foreground">
                            Parceiros Comerciais
                        </h3>
                        <p className="text-md text-primary-foreground">
                            Conheça os nossos parceiros comerciais que apoiam o kitesurf.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Parceiro 1</h4>
                            <p className="text-sm">Descrição do Parceiro 1</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Parceiro 2</h4>
                            <p className="text-sm">Descrição do Parceiro 2</p>
                        </div>
                        <div className="border p-4 rounded-lg">
                            <h4 className="font-semibold">Parceiro 3</h4>
                            <p className="text-sm">Descrição do Parceiro 3</p>
                        </div>
                    </div>

                </div>





            </div >
        </div >
    )
}