const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve los archivos estáticos de la aplicación React desde la carpeta build
app.use(express.static(path.join(__dirname, "build")));

// Redirigir las solicitudes API al backend en el puerto 3001
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  })
);

// Manejar todas las demás rutas y enviar el archivo index.html de React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
