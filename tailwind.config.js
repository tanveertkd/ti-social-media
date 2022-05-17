module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary-bg': '#F5F5F5',
                'color-grey': '#343232',
                'color-hover-grey': '#424242',
                'color-hover-light-grey': '#dbd7d7',
                'color-highlight-orange': '#ff3d00',
                'color-text-lighter-grey': '#bdbdbd',
                'color-modal-bg': 'rgba(0, 0, 0, 0.5)',

                /* alert colors */
                'color-alert-primary': '#2196f3',
                'color-alert-success': '#43a047',
                'color-alert-warning': '#ffab00',
                'color-alert-error': '#ff5252',

                /* extra colors for badges */
                'color-offline': '#969696',
                'color-idle': '#ffc400',
            },
        },
        screens: {
            'xs': '320px',
            // => @media (min-width: 320px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
    },
    plugins: [],
};
