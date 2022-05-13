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
            
                /* alert colors */
                'color-alert-primary': '#2196f3',
                'color-alert-success': '#43a047',
                'color-alert-warning': '#ffab00',
                'color-alert-error': '#ff5252',
            
                /* extra colors for badges */
                'color-offline': '#969696',
                'color-idle': '#ffc400',
            }
        },
    },
    plugins: [],
};
