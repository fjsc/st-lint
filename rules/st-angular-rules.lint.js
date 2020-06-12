const functionality = {
    "@angular-eslint/no-lifecycle-call": "warn",
    "@angular-eslint/prefer-on-push-component-change-detection": "warn",
    "@angular-eslint/use-lifecycle-interface": "warn"
};

const maintainability = {
    "@angular-eslint/no-input-rename": "warn",
    "@angular-eslint/no-output-on-prefix": "warn",
    "@angular-eslint/no-output-rename": "warn",
    "@angular-eslint/prefer-output-readonly": "warn",
    "@angular-eslint/use-pipe-transform-interface": "warn"
};

const style = {
    "@angular-eslint/component-class-suffix": "warn",
    "@angular-eslint/directive-class-suffix": "warn",
    "@angular-eslint/no-host-metadata-property": "warn",
    "@angular-eslint/no-inputs-metadata-property": "warn",
    "@angular-eslint/no-outputs-metadata-property": "warn"
};

module.exports = {
    "extends": [
        "./st-common-rules.lint.js",
    ],
    "plugins": [
        "@angular-eslint"
    ],
    "rules": {
        ...functionality,
        ...maintainability,
        ...style
    }
};
