// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['prettier', 'simple-import-sort'],
    parser: '@typescript-eslint/parser',
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'react/display-name': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': ['error'],
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // Packages `react` related packages come first.
                            ['^react', '^@?\\w'],
                            // Internal packages.
                            ['^(@|shared)(/.*|$)'],
                            // Side effect imports.
                            ['^\\u0000'],
                            // Parent imports. Put `..` last.
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            // svg, png, jpeg, imports.
                            ['^.+\\.(png|svg|jpg|jpeg,webp)$'],
                        ],
                    },
                ],
            },
        },
    ],
};
