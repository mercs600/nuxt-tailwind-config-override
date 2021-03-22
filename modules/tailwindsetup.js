import defu from 'defu'
const extendTailwindConfig = {
  theme: {
    extend: {
      spacing: {
        DEFAULT: '.5rem'
      }
    }
  }
}
const TailwindSetup = function (options) {
  this.nuxt.hook('tailwindcss:config', function (tailwindConfig) {
    tailwindConfig = defu(tailwindConfig, extendTailwindConfig)
    console.log(tailwindConfig)
  })
  console.log(this.nuxt.options.tailwindcss)
}

export default TailwindSetup
