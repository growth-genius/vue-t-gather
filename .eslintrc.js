module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                useTabs: false,
                tabWidth: 4,
                trailingComma: 'all',
                printWidth: 120,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
        // 'vue/multi-word-component-names': [
        //     'error',
        //     {
        //         ignores: [],
        //     },
        // ],
        'vue/multi-word-component-names': 0,
    },
};
