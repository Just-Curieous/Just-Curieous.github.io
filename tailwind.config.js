/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#e5e7eb',
            lineHeight: '1.7',
            'h1, h2, h3, h4': {
              color: '#ffffff',
            },
            'h1': {
              borderBottom: '2px solid #f97316',
              paddingBottom: '0.5rem',
            },
            'h2': {
              borderBottom: '1px solid #374151',
              paddingBottom: '0.25rem',
            },
            'a': {
              color: '#f97316',
              '&:hover': {
                color: '#fb923c',
              },
            },
            'code': {
              color: '#f97316',
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
            },
            'pre': {
              backgroundColor: '#111827',
              border: '1px solid #374151',
            },
            'blockquote': {
              borderLeftColor: '#f97316',
              backgroundColor: 'rgba(249, 115, 22, 0.1)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}