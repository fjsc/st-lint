Your eslint should be like this:

module.exports = {
  "extends": [
    "./st-angular-rules.lint.js"
  ],
  "rules": {}
};

or 

module.exports = {
  "extends": [
    "./st-lit-element-rules.lint.js"
  ],
  "rules": {}
};
