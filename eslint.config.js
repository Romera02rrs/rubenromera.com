import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  // Reglas recomendadas para Astro
  ...eslintPluginAstro.configs.recommended,

  // Si usas TypeScript en .astro, esto ayuda a parsear correctamente los scripts
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // Aquí puedes añadir overrides de reglas si lo necesitas
  {
    rules: {
      // Ejemplo:
      // "astro/no-set-html-directive": "error"
    },
  },
];
