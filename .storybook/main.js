const copy = require('rollup-plugin-copy')

module.exports = {
  stories: ['../stories/**/*.stories.{js,md,mdx}'],
  addons: [	
    'storybook-prebuilt/addon-knobs/register.js',	
    'storybook-prebuilt/addon-docs/register.js',	
    'storybook-prebuilt/addon-viewport/register.js',
  ],
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true
  },
  rollup: config => {
    config.plugins.push(copy({
      targets: [
        { src: 'assets/**', dest: 'storybook-static/assets' }
      ]
    }))
  }
};
