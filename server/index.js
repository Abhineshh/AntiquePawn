import express from "express";



const app = express();


app.get('/',(req,res)=>{
    res.send('the server is working');
});


app.listen(4000,()=>{
    console.log("The server is runnning at port Number 4000");
})