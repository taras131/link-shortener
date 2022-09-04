module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    "rules": {
        "no-console": "warn",
        "prefer-const": "error",
        "quotes": ["error", "double"],
        "max-len": ["error", {"code": 120}],
        "jsx-quotes": ["error", "prefer-double"],
        "comma-dangle": ["error", "always-multiline"], "semi": ["warn", "always"],
        "@typescript-eslint/no-explicit-any": "off"
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
};