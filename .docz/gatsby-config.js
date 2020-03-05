const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Cra Ts 2',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/home/sharan/cra-ts-2/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Cra Ts 2',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/sharan/cra-ts-2',
          templates:
            '/home/sharan/cra-ts-2/node_modules/docz-core/dist/templates',
          docz: '/home/sharan/cra-ts-2/.docz',
          cache: '/home/sharan/cra-ts-2/.docz/.cache',
          app: '/home/sharan/cra-ts-2/.docz/app',
          appPackageJson: '/home/sharan/cra-ts-2/package.json',
          gatsbyConfig: '/home/sharan/cra-ts-2/gatsby-config.js',
          gatsbyBrowser: '/home/sharan/cra-ts-2/gatsby-browser.js',
          gatsbyNode: '/home/sharan/cra-ts-2/gatsby-node.js',
          gatsbySSR: '/home/sharan/cra-ts-2/gatsby-ssr.js',
          importsJs: '/home/sharan/cra-ts-2/.docz/app/imports.js',
          rootJs: '/home/sharan/cra-ts-2/.docz/app/root.jsx',
          indexJs: '/home/sharan/cra-ts-2/.docz/app/index.jsx',
          indexHtml: '/home/sharan/cra-ts-2/.docz/app/index.html',
          db: '/home/sharan/cra-ts-2/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
