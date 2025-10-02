import { Smartphone, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const quickLinks = [
        { name: 'Início', to: '/' },
        { name: 'Destinos', to: '/destinos' },
        { name: 'Contato', to: '/contato' }
    ];

    const partners = [
        { src: '/assets/static/imgs/partners/logos/parceiro1.jpg', alt: 'Logo do parceiro 1', title: "Igor Gonçalves | DEV", href: "https://igdeveloper.com.br" },
    ];

    return (
        <footer className="relative flex flex-col align-center justify-center bg-background px-5 py-13">
            <div className="container mx-auto">

                <div className="space-y-4 md:space-y-6 md:grid md:grid-cols-3 gap-4">

                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <div className="flex items-center mb-6 justify-center">
                            <span className="text-2xl font-bold gradient-text">Destinos do Kite</span>
                        </div>
                        <p className="text-center justify-center text-1xl">
                            Seu guia definitivo para as melhores escolas de kitesurf no Brasil. Encontre, explore e conecte-se com a comunidade do kitesurf!
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold  mb-6">Links Rápidos</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className="text- hover:text- transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}

                    <div className="md:col-span-1 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold mb-6">Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5" />
                                <span className="">(48) 99999-9999</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Instagram className="h-5 w-5" />
                                <a className="" href="https://www.instagram.com/destinosdokite/" target="_blank">Destinos do Kite</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center mt-8">
                    <ul className="space-y-3">
                        {partners.map((partner, index) => (
                            <li key={index}>
                                <a href={partner.href} target='_blank' rel="noopener noreferrer" className="flex items-center flex-col space-x-3">
                                    <img src={partner.src} alt={partner.alt} className="w-10 h-10" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Section */}
                <div className="border-t mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-primary-foreground">
                            ©{new Date().getFullYear()} Destinos do Kite. Todos os direitos reservados.
                        </p>
                        <a className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300" href="https://igdeveloper.com.br" target='_blank'>
                            Desenvolvido por Igor Gonçalves | DEV
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
