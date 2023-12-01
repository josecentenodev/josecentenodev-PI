const express = require("express");
const path = require("path");
const router = require('./routes')
const morgan = require("morgan");
const cors = require("cors");
const multer = require('multer');
const server = express();



// Middleware para ver peticiones por consola
server.use(morgan("dev"));
// Middleware para analizar el cuerpo de solicitudes JSON
server.use(express.json());
// Middleware para permitir solicitudes desde cualquier origen
server.use(cors());
// Multer Config & Route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Endpoint para subir imágenes
server.post('/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error handling image upload:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

server.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  
  const imagePath = path.resolve(__dirname, '../public/images', filename);
  
  // Puedes agregar lógica adicional aquí, por ejemplo, verificar si el archivo realmente existe

  res.sendFile(imagePath);
});

// Middleware para agregar "/" antes de cada ruta en el enrutador
server.use('/api', router);

server.use((req,res)=> {
  res.status(404).send('<h1>404</h1>')
})

module.exports = server