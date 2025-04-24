import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Rating from './RatingCom'; // Asegúrate de que la importación sea correcta

import { FaWhatsapp } from "react-icons/fa";

import { Product } from '../interface/items';

interface ProductQuickviewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductQuickview({ product, isOpen, onClose }: ProductQuickviewProps) {
  const [showDescription, setShowDescription] = useState<boolean>(true);

  // Función para renderizar las especificaciones, manejando arreglos y campos vacíos
  const renderSpecifications = () => {
    const specs = product.specifications;
    const specificationEntries = Object.entries(specs).filter(([key, value]) => value && (typeof value === 'string' ? value.trim() !== '' : true));

    return (
      <ul className="text-sm text-gray-700 space-y-1 text-left">
        {specificationEntries.map(([key, value]) => (
          Array.isArray(value) ? (
            <li key={key}>
              <strong>{getSpecificationLabel(key)}:</strong> {value.join(', ')}
            </li>
          ) : (
            <li key={key}>
              <strong>{getSpecificationLabel(key)}:</strong> {value}
            </li>
          )
        ))}
      </ul>
    );
  };

  // Función para obtener el label de las especificaciones
  const getSpecificationLabel = (key: string): string => {
    const labels: { [key: string]: string } = {
      category: 'Categoría',
      processor: 'Procesador',
      ram: 'RAM',
      screenSize: 'Tamaño de Pantalla',
      numericKeyboard: 'Teclado Numérico',
      operatingSystem: 'Sistema Operativo',
      storage: 'Almacenamiento',
      graphicsCard: 'Tarjeta Gráfica',
      storageType: 'Tipo de Almacenamiento',
      resolution: 'Resolución',
      type: 'Tipo',
      connectivity: 'Conectividad',
      refreshRate: 'Tasa de Refresco',
      batteryLife: 'Duración de la Batería',
      material: 'Material',
      capacities: 'Capacidades',
      smartTV: 'Smart TV',
      integratedSpeakers: 'Altavoces Integrados',
      dimensions: 'Dimensiones'
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <Dialog.Panel className="relative bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:max-w-4xl w-full">
            <div className="rounded bg-white p-6 sm:p-8">
              <div className="sm:flex gap-8">
                {/* Primera Columna: Imagen */}
                <div className="sm:w-1/2">
                  <img
                    src={product.linkImg}
                    alt={product.title}
                    className="w-full h-auto rounded-lg shadow-sm mb-6 sm:mb-0"
                  />
                </div>

                {/* Segunda Columna: Información */}
                <div className="sm:w-1/2 flex flex-col justify-between">
                  <div className="mb-1 text-left">
                    <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                    <p className="text-lg text-gray-500">{product.category}</p>
                    <Rating rating={product.rating}/>
                    <p className="text-xl font-semibold text-gray-900 mt-2">Precio: ${product.price}</p>
                  </div>
                  {/* Descripción y Especificaciones */}
                  <div className="flex flex-col h-72">
                    <div className="flex space-x-4 mb-2">
                      <button
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${showDescription ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} text-left`}
                        onClick={() => setShowDescription(true)}
                      >
                        Descripción
                      </button>
                      <button
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${!showDescription ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} text-left`}
                        onClick={() => setShowDescription(false)}
                      >
                        Especificaciones
                      </button>
                      <a
                        href='https://wa.me/593963791150'
                        target='_blank'
                        className={`px-4 py-2 font-medium rounded-md transition-colors bg-green-500 text-white text-2xl text-left`}
                      >
                        <FaWhatsapp className='w-full'/>
                      </a>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex-1 overflow-y-auto text-left" style={{ maxHeight: '300px' }}>
                      {/* Sección de descripción o especificaciones */}
                      {showDescription ? (
                        <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                      ) : (
                        renderSpecifications()
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Botón de cierre */}
            <div className="bg-gray-100 px-2 py-2 sm:px-8 flex justify-end">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex justify-center rounded-md px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
