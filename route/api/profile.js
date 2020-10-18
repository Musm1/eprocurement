// route/api/profile.js
var mysql = require('mysql');
const cors = require('cors');
const bodyParser = require( 'body-parser' );
const express = require( 'express' );
const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const url = require('url');
var crypto = require('crypto');


const router = express.Router();

const s3 = new aws.S3({
 accessKeyId: 'AKIAY3Y75ADZFJC3MLX6',
 secretAccessKey: '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',
 Bucket: 'e-procurement/Test'
});
var connection  = mysql.createConnection
(
  {
    host     : 'rms-rds-wordpress.cofzj8tutyxc.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'Dcse123#',
    database : 'eprocurement'
  }
);

  //Single Upload
 
const profileImgUpload = multer({

 storage: multerS3({
  s3: s3,
  bucket: 'e-procurement/Test',
  acl: 'public-read',
  key: function (req, file, cb) {
   //cb(null, /**path.basename( file.originalname, path.extname( file.originalname ) ) + '-' +**/ Date.now() + path.extname( file.originalname ) )
   cb(null, Date.now() + path.extname( file.originalname ) )
  }
 }),
 limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
 fileFilter: function( req, file, cb ){
  checkFileType( file, cb );
 }
}).single('profileImage');
/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType( file, cb )
{
 // Allowed ext
 const filetypes = /pdf|doc|docx|jpeg|jpg|png|gif/;
 // Check ext
 const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
 // Check mime
 const mimetype = filetypes.test( file.mimetype );
if( mimetype && extname ){
  return cb( null, true );
 } else {
  cb( 'Error: Images Only!' );
 }
}
/**
 * @route POST api/profile/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post( '/profile-img-upload', ( req, res ) => {
profileImgUpload( req, res, ( error ) => {
  // console.log( 'requestOkokok', req.file );
  // console.log( 'error', error );
  if( error ){
   console.log( 'errors', error );
   res.json( { error: error } );
  } else {
   // If File not found
   if( req.file === undefined ){
    console.log( 'Error: No File Selected!' );
    res.json( 'Error: No File Selected' );
   } else {
    // If Success
    const imageName = req.file.key;
    const imageLocation = req.file.location;
    //var doc_file_hash = crypto.createHash('sha256').update(req.file).digest('hex');
    var doc_name_file_hash = crypto.createHash('sha256').update(req.file.originalname).digest('hex');
// Save the file name into database into profile model
res.json
    ({
     image: imageName,
     location: imageLocation
    });
    connection.connect (function(error) 
	{
	  if (error) throw error;
	  console.log("Connected!");
  
	  var sql = "INSERT into document (name, documentHash) VALUES ?";
	  var records = [[req.file.originalname, doc_name_file_hash]];
	  connection.query (sql, [records], function(err,res,fields) 
		{
  
			  if(err) throw err;
		      console.log("1 record inserted");
		
	  });
		connection.end();
	});
   }
  }
 });
});

// We export the router so that the server.js file can pick it up
module.exports = router;