const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');
const app  = express();
//npm install cors --save


//allow cross origin requests
app.use(cors());
//connect to mlab databse
mongoose.connect('mongodb://admin:admin123@ds237563.mlab.com:37563/homelesshelp')

mongoose.connection.once('open', () => {
	console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
	schema,
	graphiql: true
}));


app.listen(4000,() => {
	console.log('connection open');
});