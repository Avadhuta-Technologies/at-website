// Location detection and currency utilities
export interface LocationData {
  country: string;
  countryCode: string;
  currency: 'INR' | 'USD';
  timezone: string;
  timestamp?: number; // Add timestamp for cache validation
}

export interface CurrencyConfig {
  primary: 'INR' | 'USD';
  fallback: 'INR' | 'USD';
}

// Default configuration
const DEFAULT_CURRENCY_CONFIG: CurrencyConfig = {
  primary: 'INR',
  fallback: 'USD'
};

// Countries that should show INR
const INR_COUNTRIES = ['IN', 'India'];

// Cache for location data
let cachedLocation: LocationData | null = null;

// Cache validation settings
const CACHE_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const CACHE_VALIDATION_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * Validate if cached location data is still valid
 */
function isCacheValid(locationData: LocationData): boolean {
  if (!locationData.timestamp) {
    console.log('🌍 [locationUtils] Cache has no timestamp, invalid');
    return false;
  }
  
  const now = Date.now();
  const age = now - locationData.timestamp;
  
  if (age > CACHE_MAX_AGE) {
    console.log('🌍 [locationUtils] Cache is too old:', Math.round(age / (1000 * 60 * 60)), 'hours');
    return false;
  }
  
  console.log('🌍 [locationUtils] Cache is valid, age:', Math.round(age / (1000 * 60)), 'minutes');
  return true;
}

/**
 * Detect user's location using IP geolocation
 */
export async function detectUserLocation(): Promise<LocationData> {
  try {
    // Check if we have valid cached data
    if (cachedLocation && isCacheValid(cachedLocation)) {
      console.log('🌍 [locationUtils] Using valid cached location:', cachedLocation);
      return cachedLocation;
    }

    // Try to get location from localStorage and validate it
    const storedLocation = localStorage.getItem('user-location');
    if (storedLocation) {
      try {
        const parsedLocation = JSON.parse(storedLocation) as LocationData;
        if (isCacheValid(parsedLocation)) {
          cachedLocation = parsedLocation;
          console.log('🌍 [locationUtils] Using valid stored location:', parsedLocation);
          return parsedLocation;
        } else {
          console.log('🌍 [locationUtils] Stored location is invalid, fetching fresh data');
          localStorage.removeItem('user-location');
        }
      } catch (error) {
        console.warn('🌍 [locationUtils] Failed to parse stored location:', error);
        localStorage.removeItem('user-location');
      }
    }

    console.log('🌍 [locationUtils] Fetching fresh location from IP geolocation...');
    // Use IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    console.log('🌍 [locationUtils] IP geolocation response:', data);

    const locationData: LocationData = {
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'US',
      currency: INR_COUNTRIES.includes(data.country_code) ? 'INR' : 'USD',
      timezone: data.timezone || 'UTC',
      timestamp: Date.now()
    };

    console.log('🌍 [locationUtils] Processed location data:', locationData);

    // Cache the result
    cachedLocation = locationData;
    localStorage.setItem('user-location', JSON.stringify(locationData));

    return locationData;
  } catch (error) {
    console.warn('🌍 [locationUtils] Failed to detect user location:', error);
    
    // Fallback to browser's locale
    const fallbackLocation = getLocationFromLocale();
    cachedLocation = fallbackLocation;
    localStorage.setItem('user-location', JSON.stringify(fallbackLocation));
    
    console.log('🌍 [locationUtils] Using locale fallback:', fallbackLocation);
    return fallbackLocation;
  }
}

/**
 * Get location from browser's locale as fallback
 */
function getLocationFromLocale(): LocationData {
  const locale = navigator.language || 'en-US';
  const countryCode = locale.split('-')[1] || 'US';
  
  return {
    country: countryCode === 'IN' ? 'India' : 'United States',
    countryCode: countryCode,
    currency: INR_COUNTRIES.includes(countryCode) ? 'INR' : 'USD',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    timestamp: Date.now()
  };
}

/**
 * Get the appropriate currency for the user
 */
export async function getUserCurrency(): Promise<'INR' | 'USD'> {
  const location = await detectUserLocation();
  return location.currency;
}

/**
 * Format price based on user's location
 */
export async function formatPriceForUser(
  amountINR: number, 
  amountUSD: number, 
  config: CurrencyConfig = DEFAULT_CURRENCY_CONFIG
): Promise<string> {
  const userCurrency = await getUserCurrency();
  
  if (userCurrency === 'INR') {
    return formatINRPrice(amountINR);
  } else {
    return formatUSDPrice(amountUSD);
  }
}

/**
 * Format INR price
 */
export function formatINRPrice(amount: number): string {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return `₹${amount.toLocaleString()}`;
}

/**
 * Format USD price
 */
export function formatUSDPrice(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

/**
 * Get price display object with both currencies
 */
export function getPriceDisplay(amountINR: number, amountUSD: number) {
  return {
    inr: formatINRPrice(amountINR),
    usd: formatUSDPrice(amountUSD),
    primary: formatINRPrice(amountINR),
    secondary: formatUSDPrice(amountUSD)
  };
}

/**
 * Force refresh location detection by clearing cache and re-detecting
 */
export async function forceRefreshLocation(): Promise<LocationData> {
  console.log('🌍 [locationUtils] Force refreshing location detection...');
  
  // Clear cached location
  cachedLocation = null;
  localStorage.removeItem('user-location');
  
  // Force fresh detection
  return await detectUserLocation();
}

/**
 * Clear location cache
 */
export function clearLocationCache(): void {
  cachedLocation = null;
  localStorage.removeItem('user-location');
  console.log('🌍 [locationUtils] Location cache cleared');
}

/**
 * Set custom location (for testing)
 */
export function setCustomLocation(location: LocationData): void {
  const locationWithTimestamp = {
    ...location,
    timestamp: Date.now()
  };
  
  cachedLocation = locationWithTimestamp;
  localStorage.setItem('user-location', JSON.stringify(locationWithTimestamp));
  console.log('🌍 [locationUtils] Custom location set:', locationWithTimestamp);
}

/**
 * Validate and refresh location if needed
 */
export async function validateAndRefreshLocation(): Promise<LocationData> {
  const currentLocation = await detectUserLocation();
  
  // If cache is older than validation interval, refresh in background
  if (currentLocation.timestamp) {
    const age = Date.now() - currentLocation.timestamp;
    if (age > CACHE_VALIDATION_INTERVAL) {
      console.log('🌍 [locationUtils] Cache is older than validation interval, refreshing in background');
      // Refresh in background without blocking
      forceRefreshLocation().then(newLocation => {
        console.log('🌍 [locationUtils] Background refresh completed:', newLocation);
        // Dispatch event to notify components
        window.dispatchEvent(new CustomEvent('location-refreshed', { detail: newLocation }));
      }).catch(error => {
        console.warn('🌍 [locationUtils] Background refresh failed:', error);
      });
    }
  }
  
  return currentLocation;
} 