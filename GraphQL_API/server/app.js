// Simple express server for accessing
// graphql

const express = require('express');

const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shadishwiyat:mUTY6AkuLO6bGO3K@graphql.mdj3qhd.mongodb.net/', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () =>
  console.log('connected to database')
);

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});