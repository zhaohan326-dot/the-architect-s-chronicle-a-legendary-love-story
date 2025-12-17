/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'sans-serif'
  			],
			display: [
				'Playfair Display',
				'serif'
			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'Consolas',
  				'monospace'
  			],
        handwritten: [
          'Patrick Hand',
          'cursive'
        ]
  		},
  		fontSize: {
  			'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1.1' }],
  			'6xl': ['3.75rem', { lineHeight: '1.1' }],
  			'7xl': ['4.5rem', { lineHeight: '1.1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }]
  		},
  		spacing: {
  			'18': '4.5rem', '72': '18rem', '84': '21rem', '96': '24rem', '128': '32rem'
  		},
  		borderRadius: {
  			'4xl': '2rem', '5xl': '2.5rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
  			primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
  			border: 'hsl(var(--border))',
  			ring: 'hsl(var(--ring))',
  			card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
  			popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
  			secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
  			accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
  			destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
  			input: 'hsl(var(--input))',
  		},
  		boxShadow: {
  			soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  			glow: '0 0 20px -5px rgba(74, 144, 226, 0.4)',
  			'glow-lg': '0 0 40px -10px rgba(74, 144, 226, 0.3)',
  			primary: '0 0 20px -5px hsl(var(--primary) / 0.4)',
  			glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  		},
  		keyframes: {
  			'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
  			'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'sketch-in': {
          '0%': { opacity: '0', transform: 'scale(0.9) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'letter-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'sketch-in': 'sketch-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'wiggle': 'wiggle 0.4s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'letter-in': 'letter-in 0.3s ease-out forwards',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}