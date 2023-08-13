module.exports = {
    content: ['./src/**/*.{md,mdx,svelte,ts,js,html}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
          {
            tuvatheme: {
                "primary": "#3b207a",
                "secondary": "#00b4c5",
                "accent": "#dcf1f0",
                "neutral": "#2F273F",
                "base-100": "#F8F9FC",
                "info": "#469FEC",
                "success": "#24A875",
                "warning": "#F7A94B",
                "error": "#EB361E",
            },
          },
        ],
      },
    plugins: [require('daisyui')],
};