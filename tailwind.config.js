/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00e5ff',
          dim: '#00b4cc',
          dark: '#007a99',
        },
        space: {
          DEFAULT: '#03040a',
          2: '#060b14',
          card: 'rgba(0,229,255,0.04)',
        },
        gold: '#ffd700',
        green: '#00ff88',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'glitch': 'glitch 4s steps(1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'orb-spin': 'orbSpin 15s linear infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-24px) scale(1.04)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,229,255,0.4)' },
          '50%': { boxShadow: '0 0 32px rgba(0,229,255,0.8)' },
        },
        shimmer: {
          '0%': { left: '-100%' },
          '100%': { left: '150%' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        glitch: {
          '0%, 89%': { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
          '90%': { clipPath: 'inset(10% 0 60% 0)', opacity: 0.5, transform: 'translate(-3px, 0)' },
          '92%': { clipPath: 'inset(50% 0 20% 0)', opacity: 0.5, transform: 'translate(3px, 0)' },
          '94%': { clipPath: 'inset(80% 0 5% 0)', opacity: 0.5, transform: 'translate(-2px, 0)' },
          '96%, 100%': { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        },
        orbSpin: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
      },
      boxShadow: {
        'cyan': '0 0 20px rgba(0,229,255,0.3)',
        'cyan-lg': '0 0 40px rgba(0,229,255,0.25), 0 16px 48px rgba(0,229,255,0.1)',
        'gold': '0 0 20px rgba(255,215,0,0.3)',
        'red-glow': '0 0 16px rgba(255,50,50,0.5)',
      },
      backgroundImage: {
        'card-radial': 'radial-gradient(circle at 50% 0%, rgba(0,229,255,0.08), transparent 70%)',
        'hero-radial': 'radial-gradient(ellipse at center top, rgba(0,100,180,0.15), transparent 60%)',
        'cyan-gradient': 'linear-gradient(135deg, #00e5ff 0%, #0088aa 100%)',
      },
    },
  },
  plugins: [],
}
