const sharp = require('sharp');

// IMPORTANTE: Los nombres de archivo deben ser diferentes
// Leemos la imagen original desde la carpeta src
const originalImage = './src/Na_June_37.jpg';

// Guardamos la nueva imagen con un sufijo "_small" para diferenciarla
const optimizedImage = './src/Na_June_37_small.jpg';

sharp(originalImage)
    .resize({ width: 800 }) // Redimensiona a 800px de ancho
    .toFile(optimizedImage)
    .then(info => {
        console.log('¡Imagen optimizada con éxito!');
        console.log('Nuevas dimensiones:', info.width, 'x', info.height);
    })
    .catch(err => {
        console.error('Error al optimizar la imagen:', err);
    });