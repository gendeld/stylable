module.exports = {
    dependencies: ['@stylable/runtime', 'react', 'react-dom'],
    devDependencies: [
        '@stylable/core',
        '@stylable/webpack-plugin',
        '@types/react',
        '@types/react-dom',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint-config-prettier',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
        'eslint-plugin-stylable',
        'eslint',
        'file-loader',
        'html-webpack-plugin',
        'rimraf',
        'serve',
        'ts-loader',
        'typescript',
        'webpack@4',
        'webpack-cli',
        'webpack-dev-server',
    ],
    packageJson: {
        main: 'dist/index.js',
        description: 'Stylable App',
        private: true,
        license: 'UNLICENSED',
        scripts: {
            clean: 'rimraf dist',
            prebuild: 'npm run clean',
            build: 'webpack --mode production --devtool false',
            start: 'webpack-dev-server --open',
            serve: 'serve ./dist',
            lint: 'eslint . -f codeframe',
            typecheck: 'tsc --noEmit',
        },
    },
};
