var express = require('express');
 
const app=express();
const router=express.Router();
const  movieindex  =require('./movies/index');
//const  theterindex  =require('../controllers/theter/index');



 router.get('/', function(req,res){

         res.render('index', {

            title:'App'
         })
     
    
 });

 console.log("In the Router of the program");
 router.post('/movies/create',require('./movies/index'));
 router.post('/theatre/create', require('./theter/index'));

 

module.exports=router;