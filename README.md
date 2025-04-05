# React Spring Simple Animations

- Creating simple demo apps with React Spring library 
- Better performance in advanced applications: Apply animations without relying on React to render updates frame by frame 
- Adding slide-down, fade-in effects to components 
- Creating a counter by animating props or text
- Creating button to fade-in and fade-out a component


## Getting Started

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`
5. Install dependencies:
    - Open terminal and run:
     ```
     npm install
     ```
6. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify `src/App.jsx` and Remove:
        ```
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        ```
    3. Clear contents in `src/App.css`
7. Install packages : 
    ```
    yarn add @react-spring/web
    ```
8. Start Development Server: 
    ```
    npm run dev 
    ```