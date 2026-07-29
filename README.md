# Basic Node.js Informational Site 🚀

Este proyecto es la solución a la última asignación del módulo de Node.js del plan de estudios de [The Odin Project](https://www.theodinproject.com/).

El objetivo principal era construir un servidor web básico utilizando únicamente Node.js puro (el módulo nativo `http`) capaz de enrutar a diferentes páginas HTML basándose en la URL solicitada.

## 🎯 Lo que pedía el ejercicio original
* Crear un servidor básico en un archivo `index.js`.
* Crear 4 archivos HTML (`index.html`, `about.html`, `contact-me.html` y `404.html`) en el directorio raíz.
* Leer la URL solicitada (`req.url`) y devolver el archivo correspondiente usando el módulo `fs`.
* Retornar la página `404.html` para cualquier ruta no especificada.

---

## 🌟 Lo que implementé "de más" (Características Adicionales)

Para hacer el proyecto más realista, escalable y visualmente atractivo, decidí ir más allá de los requisitos básicos e implementé las siguientes mejoras:

### 1. Estructura de carpetas profesional
En lugar de dejar todos los archivos en la raíz del proyecto, implementé una arquitectura más limpia:
* Las páginas HTML fueron movidas a una carpeta `/pages`.
* Los recursos multimedia (imágenes) fueron alojados en `/src`.
* El enrutador de `index.js` fue modificado con rutas precisas para acceder al disco correctamente sin afectar las URLs limpias del lado del cliente.

### 2. Soporte para hojas de estilo (CSS)
El servidor original solo sabía enviar HTML. Configuré el `switch` de enrutamiento para atrapar las peticiones al archivo `style.css` y le inyecté dinámicamente el encabezado `Content-Type: text/css` para permitir diseños personalizados.

### 3. Manejo de archivos estáticos e imágenes personalizadas
Configuré el servidor para soportar peticiones de imágenes (como `image/jpeg`), lo que permitió crear una página 404 personalizada y mucho más amigable con el usuario. Al hacerlo, resolví errores nativos de Node.js como el `ENOENT` al mapear correctamente las rutas virtuales con las rutas físicas del disco.

### 4. Optimización de imágenes en el Backend con `sharp`
Para evitar problemas de rendimiento y tiempos de carga lentos debido a una imagen fuente muy pesada (de resolución gigantesca), integré herramientas externas:
* Inicialicé el proyecto con NPM (`npm init -y`).
* Instalé la dependencia `sharp`.
* Creé un script personalizado (`resize.js`) para procesar, redimensionar y comprimir la imagen original a un tamaño apto para la web antes de servirla.

---

## 🛠️ Cómo ejecutar este proyecto localmente

1. Clona este repositorio.
2. Abre tu terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias (para la herramienta de compresión de imágenes):
   ```bash
   npm install
   ```
4. (Opcional) Si deseas ver cómo funciona el script de optimización de imágenes, ejecuta:
   ```bash
   node resize.js
   ```
5. Inicia el servidor de Node:
   ```bash
   node index.js
   ```
6. Abre tu navegador y visita `http://localhost:8080/`.
