"use client";

// CartButton.js
// This component renders a styled cart button with hover effects

import React, { useState, useRef, useCallback } from 'react'
import CartPreviewModal from './CartPreviewModal';

// Mock data for demonstration
const cartItems = [
  {
    id: '1',
    name: 'Graphic Guide to Residential Design  (PDF Ebook)',
    price: 40,
    image: '/path-to-image.jpg',
    creator: 'Luis Furushio',
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
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M3.0142 1.99904C2.4622 2.00444 2.0092 2.44674 2.0142 2.99904C2.0192 3.55134 2.4622 4.00444 3.0142 3.99904H4.4832C4.4832 3.99904 7.71021 11.5196 7.79521 11.7178C7.31521 12.0514 6.8972 12.4693 6.6082 12.999C6.2162 13.715 6.06721 14.4248 6.04521 14.9365V15.124C6.08121 15.3791 6.1792 15.7022 6.3892 16.0302C6.7642 16.6153 7.37321 16.9678 8.17021 16.9678C8.58721 16.9678 18.7062 16.9984 19.0142 16.999C19.5672 17.0001 20.0132 16.5512 20.0142 15.999C20.0152 15.4467 19.5672 15.0001 19.0142 14.999C18.7062 14.9984 8.58921 14.9677 8.17021 14.9678C8.09221 14.9678 8.07021 14.9747 8.04521 14.9365C8.06721 14.6957 8.1582 14.3327 8.3582 13.9678C8.6972 13.3466 9.23821 12.999 10.1702 12.999H18.0142C18.4142 12.999 18.7632 12.7729 18.9202 12.4052L21.9202 5.40524C22.2032 4.74544 21.7322 3.99904 21.0142 3.99904H16.0142H6.67021L6.32622 3.18654C6.02822 2.49054 5.2402 1.99164 4.4832 1.99904H3.0142ZM7.5142 18.999C6.6862 18.999 6.0142 19.6706 6.0142 20.499C6.0142 21.3274 6.6862 21.999 7.5142 21.999C8.34221 21.999 9.01421 21.3274 9.01421 20.499C9.01421 19.6706 8.34221 18.999 7.5142 18.999ZM18.5142 18.999C17.6862 18.999 17.0142 19.6706 17.0142 20.499C17.0142 21.3274 17.6862 21.999 18.5142 21.999C19.3422 21.999 20.0142 21.3274 20.0142 20.499C20.0142 19.6706 19.3422 18.999 18.5142 18.999Z" />
        </svg>
        <span>Cart ({cartItems.length})</span>
      </button>
      {showPreview && cartItems.length > 0 && (
        <div 
          className="absolute right-0 top-full z-10"
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