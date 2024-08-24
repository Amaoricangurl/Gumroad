import Image from "next/image";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import CartButton from '../components/CartButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#242423] text-[#ddd] relative">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <CartButton />
      </div>

      {/* ... existing code ... */}
    </main>
  );
}