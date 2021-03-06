class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ["assets/css"],
    }),
    require('tailwindcss')('./assets/css/tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }],
      whitelist: ["home"]
    }),
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),
  ]
}