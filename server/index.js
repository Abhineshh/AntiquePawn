import express from "express";
import redis from 'redis';
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({
    path:'./.env'
});

const redisClient = redis.createClient(process.env.REDIS_PORT);

const app = express();
app.use(cors());


app.get("/repos/:username",async (req,res,next)=>{
    try{
        console.log("Fetching Data...");
        const {username} = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = response.json();
        const repos = data.public_repos;
        //set data to redis
        redisClient.set(username,repos);
        res.send(`${username} has ${repos} repos in his github`);
    }catch(err){
        console.error(err);
        res.status(500);
    }
});




app.listen(process.env.PORT,()=>{
    console.log("The Server has started at Port No.", process.env.PORT);
});



