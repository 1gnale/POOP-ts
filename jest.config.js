export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest', // Transforma archivos .ts, .tsx, .js, y .jsx
      },
  };