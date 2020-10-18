var mysql = require('mysql');
const express = require( 'express' );
const cors = require('cors');
const bodyParser = require( 'body-parser' );
const path = require( 'path' );

const router = express.Router();

const app = express();

const profile = require( './route/api/profile' );

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use(cors());

app.use( '/api/profile', profile);

// We export the router so that the server.js file can pick it up
module.exports = router;


if ( process.env.NODE_ENV === 'production' ) 
{
	// Set a static folder
	app.use( express.static( 'client/build' ) );
	app.get( '*', ( req, res ) => 
	res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' )));
	
}

// Set up a port
const port = process.env.PORT || 5000;

app.listen( port, () => console.log( `Server running on port: ${port}` ) );