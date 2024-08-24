"use client";

// CartButton.js
// This component renders a styled cart button with hover effects

import React, { useState, useRef, useCallback } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import CartPreviewModal from './CartPreviewModal';

// Mock data for demonstration
const cartItems = [
  {
    id: '1',
    name: 'QUILTED VEST',
    price: 123.43,
    image: '/path-to-image.jpg',
    size: 'XL',
    description: 'Cotton...',
  },
];

const CartButton = () => {
  const [showPreview, setShowPreview] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowPreview(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setShowPreview(false);
    }, 300); // 300ms delay before closing
  }, []);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="custom-button inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-normal bg-transparent border border-[rgba(221,221,221,0.35)] rounded-[4px] text-[rgb(221,221,221)] transition-transform duration-[0.14s] ease-out cursor-pointer">
        <ShoppingCartIcon className="h-6 w-6" />
        <span>Cart ({cartItems.length})</span>
      </button>
      {showPreview && cartItems.length > 0 && (
        <div 
          className="absolute right-0 top-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CartPreviewModal items={cartItems} />
        </div>
      )}
    </div>
  )
}

export default CartButton