// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2021: true
  },
  extends: 'eslint:recommended',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  globals: {
    Blockly: 'readonly',
    Scratch: 'readonly',
    ScratchBlocks: 'readonly',
    ScratchExtensions: 'readonly',
    scaffolding: 'readonly'
  },
  rules: {
    // Here is where we enforce rules to have somewhat consistent code style without being overbearing
    'semi': [
      'warn',
      'always'
    ],
    'brace-style': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'new-parens': 'warn',
    'no-trailing-spaces': [
      'warn',
      {
        ignoreComments: true
      }
    ],
    'space-infix-ops': 'warn',
    'no-tabs': 'warn',

    'no-unused-vars': 'off',
    // Allow while (true) { }
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    // Allow empty catch {} blocks
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // Returning a value from a constructor() implies a mistake
    'no-constructor-return': 'error',
    // new Promise(async () => {}) implies a mistake
    'no-async-promise-executor': 'warn',
    // x === x implies a mistake
    'no-self-compare': 'error',
    // Using ${...} in a non-template-string implies a mistake
    'no-template-curly-in-string': 'error',
    // Loops that only iterate once imply a mistake
    'no-unreachable-loop': 'error',
    // Detect some untrusted code execution
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    // Combinations of || and && are unreadable and may not do what you expect
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&&', '||']
        ]
      }
    ],
    // Disallow async functions that don't need to be. This is important as a Promise and non-Promise return value
    // significantly impacts the behavior of projects.
    'require-await': 'error'
  }
};
