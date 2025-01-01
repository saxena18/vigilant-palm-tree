import { X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { CartItem as CartItemType } from '../types/product';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 p-2 border-b dark:border-gray-700">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-indigo-600 dark:text-indigo-400">${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <select
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            className="rounded border dark:border-gray-700 bg-transparent p-1"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}