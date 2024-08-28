import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                slideLeftInDelay1s: 'slideLeftIn 1s ease-in-out both',
                slideLeftInDelay2s: 'slideLeftIn 1s ease-in-out 1s both',
                slideLeftInDelay3s: 'slideLeftIn 1s ease-in-out 2s both',
                slideRightIn: 'slideRightIn 1s ease-in-out',
                growText: 'growText 0.7s ease-in',
            },
            keyframes: {
                slideLeftIn: {
                    '0%': { transform: 'translateX(-300px)', opacity: 0 },
                    '10%': { transform: 'translateX(-300px)', opacity: 0.3 },
                    '100%': { transform: 'translateX(0)' },
                },
                slideRightIn: {
                    from: { transform: 'translateX(300px)', opacity: 0.3 },
                    to: { transform: 'translateX(0)' },
                },
                growText: {
                    from: { fontSize: '70px' },
                    to: { fontSize: '100px' }
                }
            }

        },
    },

    plugins: [forms],
};
