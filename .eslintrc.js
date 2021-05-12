module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        indent: ['error', 4], // eslint缩进四格
        'import/extensions': [2, 'never', { 'web.js': 'never', json: 'never' }],
        'import/no-extraneous-dependencies': [2, {
            devDependencies: true,
            peerDependencies: true,
            // optionalDependencies: true,
            // bundledDependencies: true
        }],
        'import/no-unresolved': [
            2,
            { caseSensitive: false },
        ],
    },
};
