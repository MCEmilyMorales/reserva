# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# Modularización Basada en Características (Feature-Based Structure).

```
  /src
    /components
      /ui        -> Componentes reutilizables (botones, inputs, etc.)
      /layout    -> Componentes de estructura (Navbar, Sidebar, Footer)
      /features  -> Componentes específicos de una funcionalidad (ej. Perfil de usuario)
    /pages
      /home
        Home.tsx
      /dashboard
        Dashboard.tsx
    /hooks        -> Hooks personalizados (useAuth, useFetch, etc.)
    /utils        -> Funciones auxiliares (formatDate, parseData, etc.)
    /services     -> Llamadas a la API (getUser, postLogin, etc.)
    /routes       -> Configuración de rutas de React Router
    /schemas      -> Esquemas de validación Zod (userSchema.ts)
    /store        -> Estado global (si usas Zustand, Redux, etc.)
    /styles       -> Estilos globales (tailwind.css, variables.css)
    main.tsx
    App.tsx
```
