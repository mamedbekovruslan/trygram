import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

const recommendedReactRules = {
  ...react.configs.recommended.rules,
  ...react.configs['jsx-runtime'].rules,
};

const recommendedTypescriptRules = typescriptEslint.configs.recommended.rules;

const recommendedJsRules = js.configs.recommended.rules;

const recommendedHooksRules = reactHooks.configs.recommended.rules;

export default [
  { ignores: ['dist', 'node_modules', 'coverage'] },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,

      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    rules: {
      ...recommendedJsRules,
      ...recommendedReactRules,
      ...recommendedHooksRules,
      ...recommendedTypescriptRules,

      'prettier/prettier': 'error',

      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        { accessibility: 'explicit' },
      ],
      '@typescript-eslint/typedef': [
        'error',
        {
          variableDeclaration: true,
        },
      ],
    },
  },
];
