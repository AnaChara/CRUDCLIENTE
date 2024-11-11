// src/index.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const ProductstypeDefs = require('./schemas/productSchema');
const Productsresolvers = require('./resolvers/productResolver');
const UsertypeDefs = require('../src/schemas/userSchema');
const Userresolvers = require('../src/resolvers/userResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://naanestrellaro:Nancy130%3F@productos.5qoll.mongodb.net/?retryWrites=true&w=majority&appName=productos');
  const server = new ApolloServer({
    typeDefs: [ProductstypeDefs, UsertypeDefs], // Combina ambos esquemas en un array
    resolvers: [Productsresolvers, Userresolvers], // Combina ambos resolvers en un array
  });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
