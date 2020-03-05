const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/sharan/cra-ts-2/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/home/sharan/cra-ts-2/README.md"))),
  "component---src-components-button-button-docs-mdx": hot(preferDefault(require("/home/sharan/cra-ts-2/src/components/Button/ButtonDocs.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/sharan/cra-ts-2/.docz/src/pages/404.js")))
}

