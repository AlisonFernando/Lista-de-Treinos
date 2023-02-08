const express = require("express");
const server = express();
server.use(express.json());

const ListaDeTreinosRoutes = require("./routes/ListaDeTreinosRoutes");
server.use("/lista_exercicios", ListaDeTreinosRoutes);

server.listen(3000, () => {
  console.log("API ONLINE");
});
