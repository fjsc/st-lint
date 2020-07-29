Your projects's eslint should be like this:

module.exports = {
  "extends": [
    "node_modules/@stratio/lint/rules/st-angular-rules.lint.js"
  ],
  "rules": {}
};

or 

module.exports = {
  "extends": [
    "node_modules/@stratio/lint/rules/st-lit-element-rules.lint.js"
  ],
  "rules": {}
};
