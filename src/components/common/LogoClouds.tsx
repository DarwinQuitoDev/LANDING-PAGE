import { useState } from 'react';

import appleLogo from '../../assets/Marcas/apple.svg';
import asusLogo from '../../assets/Marcas/asus.svg';
import dellLogo from '../../assets/Marcas/dell.svg';
import epsonLogo from '../../assets/Marcas/epson.svg';
import hpLogo from '../../assets/Marcas/hp.svg';
import lgLogo from '../../assets/Marcas/lg.svg';
import samsungLogo from '../../assets/Marcas/samsung.svg';
import sonyLogo from '../../assets/Marcas/sony.svg';
import toshibaLogo from '../../assets/Marcas/toshiba.svg';
import xiaomiLogo from '../../assets/Marcas/xiaomi.svg';

import nextIcon from '../../assets/Icon/next.svg';
import previousIcon from '../../assets/Icon/previous.svg';

interface Logo {
    alt: string;
    src: string;
}

export default function Carousel() {
    const logos: Logo[] = [
        { alt: "Apple", src: appleLogo },
        { alt: "Asus", src: asusLogo },
        { alt: "DELL", src: dellLogo },
        { alt: "Epson", src: epsonLogo },
        { alt: "HP", src: hpLogo },
        { alt: "LG", src: lgLogo },
        { alt: "Samsung", src: samsungLogo },
        { alt: "Sony", src: sonyLogo },
        { alt: "Toshiba", src: toshibaLogo },
        { alt: "Xiaomi", src: xiaomiLogo },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Ajusta el número de logos visibles según el tamaño de la pantalla
    const visibleCount = () => {
        if (window.innerWidth >= 1280) return 5; // xl
        if (window.innerWidth >= 1024) return 4; // lg
        if (window.innerWidth >= 768) return 3;  // md
        return 2;                                // sm
    };

    const prevSlide = () => {
        const isAtStart = currentIndex === 0;
        const newIndex = isAtStart ? logos.length - visibleCount() : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isAtEnd = currentIndex === logos.length - visibleCount();
        const newIndex = isAtEnd ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getVisibleLogos = () => {
        const count = visibleCount();
        if (currentIndex + count <= logos.length) {
            return logos.slice(currentIndex, currentIndex + count);
        } else {
            return [
                ...logos.slice(currentIndex),
                ...logos.slice(0, (currentIndex + count) % logos.length),
            ];
        }
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <dd className="text-center text-lg font-semibold leading-10 text-gray-900">
                Las mejores marcas las encuentras aquí.
            </dd>
            <div className="relative h-36 md:h-32 lg:h-40 xl:h-48 py-10 overflow-hidden rounded-lg flex justify-center items-center">
                {getVisibleLogos().map((logo, index) => (
                    <div
                        key={index}
                        className="w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center"
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="block w-2/6 h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-gray-200 group-focus:ring-4 group-focus:ring-white">
                    <img
                        className="w-4 h-4"
                        aria-hidden="true"
                        src={previousIcon}
                    />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-gray-200 group-focus:ring-4 group-focus:ring-white">
                    <img
                        className="w-4 h-4"
                        aria-hidden="true"
                        src={nextIcon}
                    />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
