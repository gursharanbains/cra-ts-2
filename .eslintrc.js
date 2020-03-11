module.exports = {
  extends: [
    'airbnb-typescript',
    'react-app',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',

    // disable airbnb rules
    "react/prop-types": "off"

  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
