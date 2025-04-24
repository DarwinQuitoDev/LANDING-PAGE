import appleLogo from '../../assets/Marcas/apple.svg'
import asusLogo from '../../assets/Marcas/asus.svg'
import dellLogo from '../../assets/Marcas/dell.svg'
import epsonLogo from '../../assets/Marcas/epson.svg'
import hpLogo from '../../assets/Marcas/hp.svg'
import lgLogo from '../../assets/Marcas/lg.svg'
import samsungLogo from '../../assets/Marcas/samsung.svg'
import sonyLogo from '../../assets/Marcas/sony.svg'
import toshibaLogo from '../../assets/Marcas/toshiba.svg'
import xiaomiLogo from '../../assets/Marcas/xiaomi.svg'

interface Logo {
    alt: string;
    src: string;
}

export default function Example() {
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

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dd className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Las mejores marcas las encuentras aqui.
                </dd>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            alt={logo.alt}
                            src={logo.src}
                            width={158}
                            height={48}
                            className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 ${index === 3 ? 'sm:col-start-2' : ''} ${index === 4 ? 'col-start-2 sm:col-start-auto' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
