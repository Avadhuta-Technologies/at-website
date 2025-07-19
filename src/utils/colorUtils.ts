// Color utility functions for consistent styling across components
export function getBadgeColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-100',
    'purple': 'bg-purple-100',
    'orange': 'bg-orange-100',
    'teal': 'bg-teal-100',
    'green': 'bg-green-100',
    'indigo': 'bg-indigo-100',
    'cyan': 'bg-cyan-100',
    'pink': 'bg-pink-100',
    'gray': 'bg-gray-100'
  };
  return colorMap[color] || 'bg-blue-100';
}

export function getBadgeStyle(color: string): string {
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-100 text-blue-800',
    'purple': 'bg-purple-100 text-purple-800',
    'orange': 'bg-orange-100 text-orange-800',
    'teal': 'bg-teal-100 text-teal-800',
    'green': 'bg-green-100 text-green-800',
    'indigo': 'bg-indigo-100 text-indigo-800',
    'cyan': 'bg-cyan-100 text-cyan-800',
    'pink': 'bg-pink-100 text-pink-800',
    'gray': 'bg-gray-100 text-gray-800'
  };
  return colorMap[color] || 'bg-blue-100 text-blue-800';
}

export function getDotColor(color: string): string {
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-500',
    'purple': 'bg-purple-500',
    'orange': 'bg-orange-500',
    'teal': 'bg-teal-500',
    'green': 'bg-green-500',
    'indigo': 'bg-indigo-500',
    'cyan': 'bg-cyan-500',
    'pink': 'bg-pink-500',
    'gray': 'bg-gray-500'
  };
  return colorMap[color] || 'bg-blue-500';
}

export function getGradientClass(color: string): string {
  const colorMap: Record<string, string> = {
    'blue': 'from-blue-500 to-cyan-500',
    'purple': 'from-purple-500 to-pink-500',
    'orange': 'from-orange-500 to-red-500',
    'teal': 'from-teal-500 to-green-500',
    'green': 'from-green-500 to-emerald-500',
    'indigo': 'from-indigo-500 to-purple-500',
    'cyan': 'from-cyan-500 to-blue-500',
    'pink': 'from-pink-500 to-purple-500',
    'gray': 'from-gray-500 to-gray-600'
  };
  return colorMap[color] || 'from-blue-500 to-cyan-500';
} 