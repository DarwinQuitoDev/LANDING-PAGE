import React from 'react';
import { MdComputer, MdAdUnits } from "react-icons/md";
import { IoMdEasel } from "react-icons/io";

import ImgFeatureSections from '../../assets/Img_FeatureSections.png'

// Define la interfaz para los datos de características
interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Array de características con tipado, adaptado a tu negocio
const features: Feature[] = [
  {
    name: 'Computadoras y Laptops.',
    description: 'Encuentra la mejor selección de computadoras y laptops para todas tus necesidades, desde gaming hasta trabajo profesional.',
    icon: MdComputer,
  },
  {
    name: 'Telefonos y tables',
    description: 'Telefonos y tables en todas las marcas para todas tus necesidades.',
    icon: MdAdUnits, 
  },
  {
    name: 'Electrodomésticos.',
    description: 'Refrigeradoras, lavadoras, TV y más, para equipar tu hogar con tecnología de última generación.',
    icon: IoMdEasel, 
  },
  {
    name: 'Accesorios y más.',
    description: 'Explora nuestra gama de accesorios tecnológicos y más para una experiencia completa.',
    icon: MdAdUnits,
  },
];

// Componente funcional con tipado
const HeroSection: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#cc743d]">Productos de Tecnología</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Todo lo que necesitas en un solo lugar</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ofrecemos una amplia gama de productos tecnológicos para satisfacer todas tus necesidades.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-[#ff914d]" />
                      {feature.name}
                    </dt>{' '}
                    <h3 className="inline">{feature.description}</h3>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product showcase"
            src= {ImgFeatureSections}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
