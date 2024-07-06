// babel.config.js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    "@babel/preset-react",
  ],
  plugins: [
    // Lista de plugins aquí. Si decides no usar '@babel/preset-react', agrega '@babel/plugin-syntax-jsx'.
  ],
};