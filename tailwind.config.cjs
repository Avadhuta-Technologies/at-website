/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional & Trustworthy
        'primary-blue': '#2563EB',
        'primary-dark': '#1D4ED8',
        'primary-light': '#DBEAFE',
        'primary': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        
        // Secondary Colors - Supporting
        'secondary-purple': '#7C3AED',
        'secondary-purple-light': '#A78BFA',
        'secondary-green': '#059669',
        'secondary-green-light': '#34D399',
        'secondary-orange': '#EA580C',
        'secondary-orange-light': '#FB923C',
        
        // Semantic Colors
        'success': '#059669',
        'success-light': '#D1FAE5',
        'warning': '#D97706',
        'warning-light': '#FEF3C7',
        'error': '#DC2626',
        'error-light': '#FEE2E2',
        'info': '#2563EB',
        'info-light': '#DBEAFE',
        
        // Text Colors
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
        'text-muted': '#6B7280',
        'text-white': '#FFFFFF',
        'text-dark': '#111827',
        
        // Background Colors
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F9FAFB',
        'bg-dark': '#111827',
        'bg-dark-2': '#1F2937',
        'bg-dark-3': '#374151',
      },
      
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'secondary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      
      fontSize: {
        'xs': '0.75rem',    // 12px - Captions, labels
        'sm': '0.875rem',   // 14px - Body small
        'base': '1rem',     // 16px - Body text
        'lg': '1.125rem',   // 18px - Body large
        'xl': '1.25rem',    // 20px - Subheadings
        '2xl': '1.5rem',    // 24px - H3
        '3xl': '1.875rem',  // 30px - H2
        '4xl': '2.25rem',   // 36px - H1
        '5xl': '3rem',      // 48px - Hero
        '6xl': '3.75rem',   // 60px - Large hero
      },
      
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      
      lineHeight: {
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },
      
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },
      
      borderRadius: {
        'sm': '0.25rem',   // 4px - Buttons, inputs
        'md': '0.375rem',  // 6px - Cards, badges
        'lg': '0.5rem',    // 8px - Large cards
        'xl': '0.75rem',   // 12px - Hero sections
        '2xl': '1rem',     // 16px - Modals
        'full': '9999px',  // Pills, avatars
      },
      
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'focus': '0 0 0 3px rgba(37, 99, 235, 0.1)',
      },
      
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
    },
  },
  plugins: [],
}
