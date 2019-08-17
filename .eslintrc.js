module.exports = {
    "plugins": ["mocha"],
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": ["eslint:recommended", "plugin:mocha/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off"
    }
};