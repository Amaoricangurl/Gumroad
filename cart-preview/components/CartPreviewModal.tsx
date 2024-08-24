"use client";

import React from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  creator: string;
}

interface CartPreviewModalProps {
  items: CartItem[];
}

const CartPreviewModal: React.FC<CartPreviewModalProps> = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative">
      <div className="absolute right-0 mt-2 w-[400px] bg-black text-[#ddd] rounded-[4px] shadow-[4px_4px_0px_0px_rgb(221,221,221)] z-30 border border-[rgba(221,221,221,0.35)] font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] text-sm leading-[18.2px] overflow-wrap-anywhere">
        {/* Caret */}
        <div className="caret absolute -top-2 right-4"></div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">Cart ({items.length} item{items.length !== 1 ? 's' : ''})</h2>
          {items.map((item) => (
            <div key={item.id} className="flex items-start mb-4">
              <Image src="/item-image.webp" alt={item.name} width={80} height={80} className="rounded-md mr-4" />
              <div className="flex-grow relative">
                <p className="box-border text-[#ddd] cursor-pointer block font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] text-[14px] leading-[18.2px] m-0 max-w-full min-w-0 overflow-wrap-anywhere p-0 align-bottom w-full antialiased font-bold pr-16 underline mb-1">{item.name}</p>
                <p className="box-border text-[#ddd] cursor-pointer block font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] text-[14px] leading-[18.2px] m-0 max-w-full min-w-0 overflow-wrap-anywhere p-0 align-bottom antialiased underline mb-1">{item.creator}</p>
                <p className="absolute top-0 right-0 text-sm font-semibold">${item.price.toFixed(2)}</p>
                <p className="box-border text-[#ddd] font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] text-[14px] leading-[18.2px] m-0 max-w-full min-w-0 overflow-wrap-anywhere p-0 align-bottom list-none antialiased mb-1"><strong>Qty:</strong> 1</p>
                <p className="box-border text-[#ddd] font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] text-[14px] leading-[18.2px] m-0 max-w-full min-w-0 overflow-wrap-anywhere p-0 align-bottom list-none antialiased"><strong>Version:</strong> English</p>
                <div className="flex justify-end mt-2 space-x-4">
                  <button className="text-[#ddd] underline text-xs hover:text-white transition-colors duration-200">Configure</button>
                  <button className="text-[#ddd] underline text-xs hover:text-white transition-colors duration-200">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[rgba(221,221,221,0.35)] pt-2">
            <p className="flex justify-between"><span>Subtotal:</span> <span className="font-semibold">${subtotal.toFixed(2)}</span></p>
            <p className="text-sm text-gray-400">Shipping and taxes calculated at checkout</p>
          </div>
          <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-normal bg-transparent border border-[rgba(221,221,221,0.35)] rounded-[4px] text-[rgb(221,221,221)] transition-transform duration-[0.14s] ease-out cursor-pointer mt-4 font-['Mabry_Pro',Avenir,Montserrat,Corbel,'URW_Gothic',source-sans-pro,sans-serif] antialiased hover:shadow-[4px_4px_0px_0px_rgb(221,221,221)] hover:-translate-x-1 hover:-translate-y-1">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPreviewModal; 