//esta exportando un objeto 
//input archivo inicial ruta a index.js
//archivo salida output file iria bundle

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'cjs'
    }
};