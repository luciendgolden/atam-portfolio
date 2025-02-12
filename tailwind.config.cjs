const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './public/**/*.html',
        './node_modules/preline/plugin.js',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            serif: ['Newsreader', ...defaultTheme.fontFamily.serif]
        },
        extend: {
            colors: {
                'custom-blue': 'rgb(var(--color-custom-blue) / <alpha-value>)',
                'custom-pink': 'rgb(var(--color-custom-pink) / <alpha-value>)',
            },
            textColor: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)'
            },
            backgroundColor: {
                main: 'rgb(var(--color-bg-main) / <alpha-value>)',
                muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
                accent: 'rgb(var(--color-bg-accent) / <alpha-value>)',
            },
            borderColor: {
                main: 'rgb(var(--color-border-main) / <alpha-value>)'
            },
            typography: (theme) => ({
                dante: {
                    css: {
                        '--tw-prose-body': theme('textColor.main / 100%'),
                        '--tw-prose-headings': theme('textColor.main / 100%'),
                        '--tw-prose-lead': theme('textColor.main / 100%'),
                        '--tw-prose-links': theme('textColor.main / 100%'),
                        '--tw-prose-bold': theme('textColor.main / 100%'),
                        '--tw-prose-counters': theme('textColor.main / 100%'),
                        '--tw-prose-bullets': theme('textColor.main / 100%'),
                        '--tw-prose-hr': theme('borderColor.main / 100%'),
                        '--tw-prose-quotes': theme('textColor.main / 100%'),
                        '--tw-prose-quote-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-captions': theme('textColor.main / 100%'),
                        '--tw-prose-code': theme('textColor.main / 100%'),
                        '--tw-prose-pre-code': theme('colors.zinc.100'),
                        '--tw-prose-pre-bg': theme('colors.zinc.800'),
                        '--tw-prose-th-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-td-borders': theme('borderColor.main / 100%')
                    }
                },
                DEFAULT: {
                    css: {
                        a: {
                            fontWeight: 'normal',
                            textDecoration: 'underline',
                            textDecorationStyle: 'dashed',
                            textDecorationThickness: '1px',
                            textUnderlineOffset: '2px',
                            textDecorationColor: 'rgb(var(--color-custom-pink))',
                            '&:hover': {
                                textDecorationStyle: 'solid'
                            }
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            fontFamily: theme('fontFamily.sans'),
                            fontWeight: 500
                        },
                        blockquote: {
                            border: 0,
                            fontFamily: theme('fontFamily.sans'),
                            fontSize: '1.3125em',
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: 1.4,
                            paddingLeft: 0,
                            '@media (min-width: theme("screens.sm"))': {
                                fontSize: '1.66667em',
                                lineHeight: 1.3
                            }
                        }
                    }
                },
                lg: {
                    css: {
                        blockquote: {
                            paddingLeft: 0
                        }
                    }
                }
            })
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('preline/plugin'),
    ]
};
