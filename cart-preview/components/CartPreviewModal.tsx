"use client";

import React from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  description: string;
}

interface CartPreviewModalProps {
  items: CartItem[];
}

const CartPreviewModal: React.FC<CartPreviewModalProps> = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="absolute right-0 mt-2 w-auto min-w-[194px] bg-black text-[#ddd] rounded-[4px] shadow-[4px_4px_0px_0px_rgb(221,221,221)] z-30 p-4 border border-[rgba(221,221,221,0.35)] font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] text-sm leading-[18.2px]">
      <h2 className="text-lg font-semibold mb-2">Cart ({items.length} item{items.length !== 1 ? 's' : ''})</h2>
      {items.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-4" />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-400">{item.size} - {item.description}</p>
            <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
      <div className="border-t border-[rgba(221,221,221,0.35)] pt-2">
        <p className="flex justify-between"><span>Subtotal:</span> <span className="font-semibold">${subtotal.toFixed(2)}</span></p>
        <p className="text-sm text-gray-400">Shipping and taxes calculated at checkout</p>
      </div>
      <button className="w-full bg-[#ddd] text-black py-2 rounded-[4px] mt-4 hover:bg-white transition-colors duration-200">View cart & check out</button>
    </div>
  );
};

export default CartPreviewModal;