const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
    let path = './';
    let contentType = 'text/html'; // Por defecto asumimos que es HTML

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
            
        case '/about':
            path += 'pages/about.html'; // Busca dentro de la carpeta pages
            res.statusCode = 200;
            break;
            
        case '/contact-me':
            path += 'pages/contact-me.html'; // Busca dentro de la carpeta pages
            res.statusCode = 200;
            break;
            
        case '/style.css':
            path += 'style.css';
            contentType = 'text/css';
            res.statusCode = 200;
            break;
            
        // URL que pedirá la etiqueta <img src="/src/Na_June_37.jpg"> en tu HTML
        case '/src/Na_June_37_small.jpg':
            path += 'src/Na_June_37_small.jpg'; // Ruta real al archivo en el disco
            contentType = 'image/jpeg';
            res.statusCode = 200;
            break;
            
        default:
            path += 'pages/404.html';
            res.statusCode = 404;
            break;
    }

    res.setHeader('Content-Type', contentType);

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});