module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        green: {
          default: 'var(--green-default)',
          yellow: 'var(--green-yellow)',
          lime: 'var(--green-lime)',
          olive: 'var(--green-olive)'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
