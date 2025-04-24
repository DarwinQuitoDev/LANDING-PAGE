import { useState, useMemo, useCallback, ChangeEvent } from "react";
import { Product } from '../interface/items';
import { itemsTem } from '../data/itemTem';
import CardItem from "./CardItemCom";
import ProductQuickview from "./ProductQuickview";
import { FaShopify } from "react-icons/fa";
import { Category } from "../interface/category";

// Definición de categorías
const categories: Category[] = [
  { id: 0, name: "Todas" },
  { id: 1, name: "Laptops" },
  { id: 2, name: "Gaming Laptops" }
];

// Mapa para acceso rápido a las categorías por id
const categoryMap = new Map(categories.map(cat => [cat.id, cat.name]));

export default function CategoryFilters() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickviewOpen, setIsQuickviewOpen] = useState(false);

  const products = useMemo<Product[]>(() => {
    return itemsTem.filter(product =>
      (selectedCategory.id === 0 || product.category === categoryMap.get(selectedCategory.id)) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsQuickviewOpen(true);
  }, []);

  return (
    <section className="w-full py-24 sm:py-32 pb-12 px-2 flex items-center justify-center bg-white">
      <div className="relative w-full max-w-[1100px]">
        <div className="bg-white rounded-lg shadow-md p-4">
          <dd className="pt-4 text-3xl font-bold text-center flex items-center justify-center space-x-2">
            <FaShopify className="text-green-600" />
            <span>Conoce nuestros productos</span>
            <FaShopify className="text-green-600" />
          </dd>
          <p className='pb-6 text-[#6D737A] py-1 text-center'>
            Líderes en tecnologpía
          </p>
          <div className="flex items-center mb-4">
            <input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedCategory.id === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleCategoryChange(category)}
                aria-pressed={selectedCategory.id === category.id}
                aria-label={`Filtrar por categoría ${category.name}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 max-h-[900px] overflow-auto">
          <ProductList products={products} onProductClick={handleProductClick} />
        </div>
        {/* Product Quickview */}
        {selectedProduct && (
          <ProductQuickview
            product={selectedProduct}
            isOpen={isQuickviewOpen}
            onClose={() => setIsQuickviewOpen(false)}
          />
        )}
      </div>
    </section>
  );
}

function ProductList({ products, onProductClick }: { products: Product[], onProductClick: (product: Product) => void }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <CardItem
            title={product.title}
            category={product.category}
            rating={product.rating}
            price={product.price}
            linkImg={product.linkImg}
          />
        </div>
      ))}
    </div>
  );
}
