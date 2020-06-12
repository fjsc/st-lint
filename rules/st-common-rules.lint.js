const bestPractiseRules = {
    "array-callback-return": ["warn", {"allowImplicit": true, "checkForEach": true}],
    "block-scoped-var": "warn",
    "complexity": ["warn", 10], // elabi3: my recommendation is to decrease this to 3
    "consistent-return": "warn",
    "curly": ["warn", "all"],
    "default-param-last": "warn",
    "eqeqeq": ["warn", "always"],
    "max-classes-per-file": ["warn", 2], // elabi3: my recommendation is to decrease this to 1
    "no-constructor-return": "warn",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-multi-spaces": ["warn", {"ignoreEOLComments": false}],
    "no-proto": "warn",
    "no-self-compare": "warn",
};

const stylesRules = {
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs"],
    "camelcase": ["warn", {"properties": "always"}],
    "comma-dangle": ["warn", {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
    }],
    "max-depth": ["warn", 3],  // elabi3: my recommendation is to decrease this to 2
    "max-len": ["warn", {"code": 140, "ignoreTrailingComments": true}],
    "max-lines": ["warn", 400],  // elabi3: my recommendation is to decrease this to 250
    "max-lines-per-function": ["warn", 45], // elabi3: my recommendation is to decrease this to 30
    "max-params": ["warn", 3],
};

const ECMAScript6 = {
    "arrow-body-style": ["warn", "always"],
    "no-useless-constructor": ["warn"],
    "prefer-const": ["warn"],
    "prefer-spread": ["warn"],
};

const tsPluginRules = {
    "member-ordering": [
        "warn",
        {
            "order": ["static-field", "instance-field", "static-method", "instance-method"]
        }
    ],
    "typedef": [
        "warn",
        {
            "arrayDestructuring": true,
            "arrowParameter": true,
            "memberVariableDeclaration": true,
            "objectDestructuring": true,
            "parameter": true,
            "propertyDeclaration": true,
            "variableDeclaration": true
        }
    ],
};

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
    ],
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        ...bestPractiseRules,
        ...stylesRules,
        ...ECMAScript6,
        ...tsPluginRules
    }
};
