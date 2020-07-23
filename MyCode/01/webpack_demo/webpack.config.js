module.exports = {
    entry: './src/add.js',
    mode: 'development',
    output: {
        globalObject: "this",
        filename: './dist/add.js',
        // export to AMD, CommonJS, or window
        libraryTarget: 'umd',
        // the name exported to window
        library: 'add'
    }
};