module.exports = {
    theme: {
        extend: {
            boxShadow:{
                'inner-lg': 'inset 0 4px 8px rgba(0,0,0,0,0.3)',
            }
        }
    },
    plugins:[],
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    safelist: [
        'bg-rose-100', 'text-rose-400',
        'bg-blue-100', 'text-blue-400',
        'bg-amber-100', 'text-amber-400',
        'bg-green-100', 'text-green-400'
      ]
}
