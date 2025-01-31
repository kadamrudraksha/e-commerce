import Image from "next/image";
import { Button } from "./Button.jsx";

export function ProductCard({ product,onAddToCart }) {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={product.image }
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="p-4"
        />
      </div>

      {/* Product Details */}
      <div className="p-6 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>

        {/* Price */}
        <p className="text-2xl font-bold text-indigo-600">${product.price}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

        {/* Add to Cart Button */}
        <Button onClick={()=> onAddToCart(product)} className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-all">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
