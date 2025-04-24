import React, { useState, useEffect } from 'react';
import CardItem from './CardItemCom';
import { itemsTem as itemList } from '../data/itemTem'; // Asegúrate de que la importación sea correcta
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaShopify } from "react-icons/fa";
import ProductQuickview from './ProductQuickview';
import { Product } from '../interface/items';

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsToShow, setItemsToShow] = useState<number>(4);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickviewOpen, setIsQuickviewOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsToShow(1);
      else if (width < 768) setItemsToShow(2);
      else if (width < 1024) setItemsToShow(3);
      else setItemsToShow(4);
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, itemList.length - itemsToShow));
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickviewOpen(true);
  };

  const visibleItems = itemList.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className='w-full py-24 sm:py-36 pb-14 px-2 flex items-center justify-center bg-white '>
      <div className='relative w-full max-w-[1100px]'>
        <h1 className='py-1 pb-2 text-3xl font-bold text-center flex items-center justify-center space-x-2'>
          <FaShopify className='text-red-600' />
          <span>Productos más vendidos</span>
          <FaShopify className='text-red-600' />
        </h1>
        <p className=' pb-6 text-[#6D737A] py-1 text-center'>
          Conoce nuestros productos más vendidos.
        </p>
        <div className='relative'>
          <div className='flex overflow-x-auto no-scrollbar space-x-4 pb-4 justify-center'>
            {visibleItems.map(item => (
              <div
                className='flex-shrink-0 w-60 cursor-pointer'
                key={item.id}
                onClick={() => handleProductClick(item)}
              >
                <CardItem {...item} />
              </div>
            ))}
          </div>
          <div className='absolute top-full left-1/2 transform -translate-x-1/2 flex space-x-4 mt-4'>
            <button
              onClick={handlePrev}
              className='bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition'
              aria-label="Previous"
            >
              <FaAngleDoubleLeft className='w-full' />
            </button>
            <button
              onClick={handleNext}
              className='bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition'
              aria-label="Next"
            >
              <FaAngleDoubleRight className='w-full' />
            </button>
          </div>
        </div>
      </div>

      {isQuickviewOpen && selectedProduct && (
        <ProductQuickview
          product={selectedProduct}
          isOpen={isQuickviewOpen}
          onClose={() => setIsQuickviewOpen(false)}
        />
      )}
    </section>
  );
};

export default ProductCarousel;
