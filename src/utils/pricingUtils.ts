// Pricing utilities for handling discounts, currency conversion, and price calculations
export interface PriceData {
  basePriceINR: number;
  basePriceUSD: number;
  discountPercentage: number;
  currency: 'INR' | 'USD';
}

export interface DiscountedPrice {
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: number;
  savings: string;
  currency: 'INR' | 'USD';
}

/**
 * Calculate discounted price based on base price and discount percentage
 */
export function calculateDiscountedPrice(
  basePrice: number, 
  discountPercentage: number
): { discountedPrice: number; savings: number } {
  const discountAmount = (basePrice * discountPercentage) / 100;
  const discountedPrice = basePrice - discountAmount;
  
  return {
    discountedPrice: Math.round(discountedPrice),
    savings: Math.round(discountAmount)
  };
}

/**
 * Format price with currency symbol and appropriate formatting
 */
export function formatPrice(amount: number, currency: 'INR' | 'USD'): string {
  if (currency === 'INR') {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount.toLocaleString()}`;
  } else {
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  }
}

/**
 * Get discounted price display object with both currencies
 */
export function getDiscountedPriceDisplay(
  basePriceINR: number,
  basePriceUSD: number,
  discountPercentage: number,
  userCurrency: 'INR' | 'USD'
): DiscountedPrice {
  // Calculate discounted prices for both currencies
  const discountedINR = calculateDiscountedPrice(basePriceINR, discountPercentage);
  const discountedUSD = calculateDiscountedPrice(basePriceUSD, discountPercentage);
  
  // Use the user's preferred currency
  const basePrice = userCurrency === 'INR' ? basePriceINR : basePriceUSD;
  const discounted = userCurrency === 'INR' ? discountedINR : discountedUSD;
  
  return {
    originalPrice: formatPrice(basePrice, userCurrency),
    discountedPrice: formatPrice(discounted.discountedPrice, userCurrency),
    discountPercentage,
    savings: formatPrice(discounted.savings, userCurrency),
    currency: userCurrency
  };
}

/**
 * Get price display for cart calculations (returns numbers, not formatted strings)
 */
export function getCartPriceData(
  basePriceINR: number,
  basePriceUSD: number,
  discountPercentage: number,
  userCurrency: 'INR' | 'USD'
): { originalPrice: number; discountedPrice: number; savings: number } {
  const basePrice = userCurrency === 'INR' ? basePriceINR : basePriceUSD;
  const discounted = calculateDiscountedPrice(basePrice, discountPercentage);
  
  return {
    originalPrice: basePrice,
    discountedPrice: discounted.discountedPrice,
    savings: discounted.savings
  };
}

/**
 * Calculate total cart value with discounts
 */
export function calculateCartTotal(
  items: Array<{
    basePriceINR: number;
    basePriceUSD: number;
    discountPercentage: number;
    quantity?: number;
  }>,
  userCurrency: 'INR' | 'USD'
): { subtotal: number; totalDiscount: number; finalTotal: number } {
  let subtotal = 0;
  let totalDiscount = 0;
  
  items.forEach(item => {
    const quantity = item.quantity || 1;
    const basePrice = userCurrency === 'INR' ? item.basePriceINR : item.basePriceUSD;
    const discounted = calculateDiscountedPrice(basePrice, item.discountPercentage);
    
    subtotal += basePrice * quantity;
    totalDiscount += discounted.savings * quantity;
  });
  
  const finalTotal = subtotal - totalDiscount;
  
  return {
    subtotal: Math.round(subtotal),
    totalDiscount: Math.round(totalDiscount),
    finalTotal: Math.round(finalTotal)
  };
}

/**
 * Format price range (for pods with monthly pricing)
 */
export function formatPriceRange(
  basePriceINR: number,
  basePriceUSD: number,
  discountPercentage: number,
  userCurrency: 'INR' | 'USD',
  months: number = 1
): { originalRange: string; discountedRange: string; savings: string } {
  const basePrice = userCurrency === 'INR' ? basePriceINR : basePriceUSD;
  const discounted = calculateDiscountedPrice(basePrice, discountPercentage);
  
  const originalTotal = basePrice * months;
  const discountedTotal = discounted.discountedPrice * months;
  const totalSavings = discounted.savings * months;
  
  return {
    originalRange: formatPrice(originalTotal, userCurrency),
    discountedRange: formatPrice(discountedTotal, userCurrency),
    savings: formatPrice(totalSavings, userCurrency)
  };
}

/**
 * Get discount badge text
 */
export function getDiscountBadgeText(discountPercentage: number): string {
  if (discountPercentage >= 50) return 'MEGA SALE';
  if (discountPercentage >= 30) return 'BIG SAVE';
  if (discountPercentage >= 20) return 'SAVE';
  if (discountPercentage >= 10) return 'OFF';
  return 'DEAL';
}

/**
 * Get discount badge color based on percentage
 */
export function getDiscountBadgeColor(discountPercentage: number): string {
  if (discountPercentage >= 50) return 'bg-red-500 text-white';
  if (discountPercentage >= 30) return 'bg-orange-500 text-white';
  if (discountPercentage >= 20) return 'bg-yellow-500 text-black';
  if (discountPercentage >= 10) return 'bg-green-500 text-white';
  return 'bg-blue-500 text-white';
} 