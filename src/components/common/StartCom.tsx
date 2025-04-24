import React from 'react';
import { FaWhatsapp, FaLocationArrow } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import Portada from '../../assets/Portada.png'

// Define la interfaz para los botones de acción
interface ActionButtonProps {
    href: string;
    text: string;
    bgColor: string;
    hoverColor: string;
    icon: React.ReactNode;
}

// Botones de acción predefinidos
const actionButtons: ActionButtonProps[] = [
    {
        href: "https://firebasestorage.googleapis.com/v0/b/compustoretena-10666.appspot.com/o/Catalogo%2FCat%C3%A1logo.pdf?alt=media&token=e143898e-83e3-4203-b784-d42400bfe1b7",
        text: "Descarga nuestro catálogo",
        bgColor: "bg-cyan-600",
        hoverColor: "hover:bg-cyan-500",
        icon: <AiFillProduct className="text-2xl pl-2" />,
    },
    {
        href: "https://maps.app.goo.gl/DhJmwNrtPsH3yEhq7",
        text: "Donde estamos ubicación",
        bgColor: "bg-indigo-600",
        hoverColor: "hover:bg-indigo-500",
        icon: <FaLocationArrow className="text-2xl pl-2" />,
    },
    {
        href: "https://wa.me/593963791150",
        text: "Contactar con un asistente",
        bgColor: "bg-green-600",
        hoverColor: "hover:bg-green-500",
        icon: <FaWhatsapp className="text-2xl pl-2" />,
    },
];

const ActionButton: React.FC<ActionButtonProps> = ({ href, text, bgColor, hoverColor, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-md ${bgColor} text-white py-2 px-4 text-sm font-semibold shadow-lg ${hoverColor}`}
    >
        {text} {icon}
    </a>
);

const HeroSection: React.FC = () => {
    return (
        <div className="relative isolate mt-16 bg-gray-700">
            {/* Sección Principal */}
            <section
                className="relative py-24 px-6 lg:px-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${Portada})` }}
            >
                <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
                    <svg
                        className="absolute inset-0 -z-10 transform-gpu overflow-hidden opacity-30"
                        viewBox="0 0 1155 678"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
                                <stop offset="0%" stopColor="#ff80b5" />
                                <stop offset="100%" stopColor="#9089fc" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#gradient)"
                            d="M0 0h1155v678H0z"
                        />
                    </svg>
                </div>
                <div className="relative mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">
                        CompuStore: Tu tienda de tecnología en Tena
                    </h1>
                    <h2 className='mt-6 text-lg text-white'>Computadoras y Laptops de última generación</h2>
                    <h2 className='text-lg text-white'>electrodomésticos como refrigeradoras y lavadoras</h2>
                    <h2 className='text-lg text-white'>celulares, accesorios tecnológicos, motos</h2>
                    <h2 className='text-lg text-white'>y má tecnología</h2>
                    <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
                        {actionButtons.map((button, index) => (
                            <ActionButton key={index} {...button} />
                        ))}
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl">
                        <svg
                            className="absolute inset-0 -z-10 transform-gpu overflow-hidden opacity-30"
                            viewBox="0 0 1155 678"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <defs>
                                <linearGradient id="gradient2" x1="0" x2="1" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#ff80b5" />
                                    <stop offset="100%" stopColor="#9089fc" />
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#gradient2)"
                                d="M0 0h1155v678H0z"
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
