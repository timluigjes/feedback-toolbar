# Vue 3 + TypeScript + Vite

This template provides a minimal setup to get Vue 3 working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or
  `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-vue](https://eslint.vuejs.org/) and update the config:

```js
// eslint.config.js
import vue from 'eslint-plugin-vue'

export default tseslint.config({
    // Add the vue plugin
    plugins: {
        vue,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...vue.configs.recommended.rules,
    },
})
```
