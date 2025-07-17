/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Clean Minimalistic Color Palette
        // Soft Black & Graphite Base
        'graphite': {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#202124', // Soft black base
          950: '#171717', // Deep graphite
        },
        
        // Muted Accents
        'mint': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        'lavender': {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        
        'cerulean': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        
        // Primary Colors - Clean & Minimal
        'primary': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Muted mint
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        // Secondary Colors - Supporting
        'secondary': {
          'mint': '#22c55e',
          'lavender': '#71717a',
          'cerulean': '#0ea5e9',
        },
        
        // Semantic Colors
        'success': '#22c55e',
        'success-light': '#dcfce7',
        'warning': '#f59e0b',
        'warning-light': '#fef3c7',
        'error': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'error-light': '#fee2e2',
        'info': '#0ea5e9',
        'info-light': '#e0f2fe',
        
        // Text Colors
        'text-primary': '#202124',
        'text-secondary': '#5f6368',
        'text-muted': '#9aa0a6',
        'text-white': '#ffffff',
        'text-dark': '#202124',
        
        // Background Colors
        'bg-primary': '#ffffff',
        'bg-secondary': '#f8f9fa',
        'bg-tertiary': '#f1f3f4',
        'bg-dark': '#202124',
        'bg-dark-2': '#3c4043',
        'bg-dark-3': '#5f6368',
        
        // Glass morphism colors - subtle
        'glass': {
          'primary': 'rgba(255, 255, 255, 0.8)',
          'secondary': 'rgba(255, 255, 255, 0.6)',
          'tertiary': 'rgba(255, 255, 255, 0.4)',
        },
      },
      
      fontFamily: {
        // Clean fonts for body text
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['DM Sans', 'sans-serif'],
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

      // Height utilities
      minHeight: {
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
        // Clean, subtle shadows
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'focus': '0 0 0 3px rgba(34, 197, 94, 0.1)',
      },
      
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
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
      
      // Clean animations for microinteractions
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      // Backdrop blur for subtle glass effects
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      
      // Glassmorphism utilities
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glass-strong': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
        'glass-dark-strong': 'linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.08) 100%)',
      },
      
      // Glassmorphism border utilities
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.2)',
        'glass-strong': 'rgba(255, 255, 255, 0.3)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
        'glass-dark-strong': 'rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.resize-vertical': {
          'resize': 'vertical',
        },
        '.resize-horizontal': {
          'resize': 'horizontal',
        },
        '.resize-both': {
          'resize': 'both',
        },
        '.resize-none': {
          'resize': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
