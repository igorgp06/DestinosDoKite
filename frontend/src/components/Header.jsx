const navItems = [
    { name: "Início", href: "#hero", current: "true" },
    { name: "Destinos", href: "#destinations" },
    { name: "Sobre", href: "#about" },
    { name: "Parceiros", href: "#partners" },
    { name: "Contato", href: "#contact" },
]

export const Header = () => {
    return (
        <>
            <nav className="fixed w-full left-0 top-0 z-50 black shadow-md">

                <div className="container flex item-center justify-between py-4">
                    <a className="text-2xl font-bold text-primary flex items-center" href="#" ></a>





                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className={`text-base font-medium text-gray-500 hover:text-gray-900 ${item.current ? 'text-primary' : ''}`}>

                            </a>
                        ))}
                    </div>
                </div>

            </nav>
        </>
    )
}