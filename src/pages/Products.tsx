
import ProductGrid from '@/components/ProductGrid';
import { farmProducts } from '@/data/products';
import { useCart } from '@/components/Layout';

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h1>
      <ProductGrid products={farmProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default Products;
