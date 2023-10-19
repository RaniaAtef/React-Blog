const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("Data/db.json"); // Adjust path as needed
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001; // Define the port you want to use

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
