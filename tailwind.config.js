module.exports = {
    theme: {
        extend: {},
        screens: {
            xs: '120px',

            sm: '460px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',
        },
        textColor: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            default: 'var(--color-text-default)',
            'default-soft': 'var(--color-text-default-soft)',
            inverse: 'var(--color-text-inverse)',
            'inverse-soft': 'var(--color-text-inverse-soft)',
        },
        backgroundColor: {
            primary: 'var(--color-bg-primary)',
            secondary: 'var(--color-bg-secondary)',
            default: 'var(--color-bg-default)',
            inverse: 'var(--color-bg-inverse)',
        },
    },
    variants: {
        transitionProperty: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
};
