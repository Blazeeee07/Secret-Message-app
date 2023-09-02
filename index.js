//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post('/check',(req,res)=>{
    const pwd= req.body["password"];
    console.log(pwd);
    if(pwd==="ILoveProgramming"){
    res.sendFile(__dirname+"/public/secret.html");}
    else{
    res.send("LOSERRRR!");}
})

app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000");
})