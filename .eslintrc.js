module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    ignorePatterns: ['**/lib/*.js'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
}
