module.exports = {
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8
  },

  "env": {
    "browser": true,
    "es6": true,
    "jasmine": true,
    "node": true,
  },

  "plugins": [
    "import",
    "unicorn",
  ],

  "extends": [
    "eslint:recommended"
  ],

  "rules": {
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral > *"]
    }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
      "mode": "minimum"
    }],
    "no-multi-spaces": ["error", {
      "exceptions": {
        "ImportDeclaration": true,
        "Property": true,
        "VariableDeclarator": true
      },
      "ignoreEOLComments": true
    }],
    "no-multi-str": "off",
    "no-param-reassign": ["error", {
      "props": true,
      "ignorePropertyModificationsFor": ["accumulator", "object", "result"]
    }],
    "no-plusplus": "error",
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "no-useless-concat": "error",                      "operator-linebreak": ["error", "after", {
      "overrides": {
        "?": "before",
        ":": "before",
        "+=": "before"
      }
    }],
    "prefer-template": "off",
    "semi": ["error", "never"],
    "space-before-function-paren": ["error", "always"],
    "quote-props": ["error", "as-needed", {
      "keywords": true,
      "numbers": true
    }],
    "quotes": ["error", "single", {
      "avoidEscape": false,
      "allowTemplateLiterals": false,
    }],


    "import/export": "error",
    "import/exports-last": "error",
    "import/first": "error",
    "import/max-dependencies": ["error", {
      "max": 10
    }],
    "import/named": "error",
    "import/newline-after-import": "error",
    "import/no-amd": "error",                          "import/no-anonymous-default-export": ["error", {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowCallExpression": true,
      "allowLiteral": false,
      "allowObject": false
    }],
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-self-import": "error",
    "import/no-unassigned-import": "error",
    "import/no-unresolved": ["error", {
      "caseSensitive": true,
      "commonjs": true
    }],
    "import/no-useless-path-segments": ["error", {
      "noUselessIndex": true
    }],
    "import/no-webpack-loader-syntax": "error",
    "import/order": ["error", {
      "groups": [["builtin", "external", "internal"]]
    }],
    "import/prefer-default-export": "error",
    "import/default": "off",
    "import/dynamic-import-chunkname": "off",
    "import/extensions": "off",
    "import/group-exports": "off",
    "import/namespace": "off",
    "import/no-absolute-path": "off",
    "import/no-commonjs": "off",
    "import/no-default-export": "off",
    "import/no-deprecated": "off",
    "import/no-internal-modules": "off",
    "import/no-named-default": "off",
    "import/no-named-export": "off",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-unused-modules": "off",
    "import/unambiguous": "off",


    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/explicit-length-check": ["error", {
      "non-zero": "greater-than"
    }],
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-fn-reference-in-iterator": "error",
    "unicorn/no-for-loop": "error",
    "no-nested-ternary": "off",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-exponentiation-operator": "error",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": ["error", {
      "replacements": {
        "args": false,
      },
    }],

    "unicorn/regex-shorthand": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/catch-error-name": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/custom-error-definition": "off",
    "unicorn/expiring-todo-comments": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-console-spaces": "off",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-new-buffer": "off",
    "unicorn/no-process-exit": "off",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/no-unused-properties": "off",
  }
}