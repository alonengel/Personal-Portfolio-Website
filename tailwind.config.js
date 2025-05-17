module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx,mdx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            //css for the blog theme
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: '2.25rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                        },
                        h2: {
                            fontSize: '1.875rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                        },
                        h3: {
                            fontSize: '1.5rem',
                            fontWeight: '600',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
