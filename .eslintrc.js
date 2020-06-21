module.exports = {
    "env": {
        "es2020": true,
        "node": true
    },
    "extends": [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:promise/recommended'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    "rules": {
    }
};
