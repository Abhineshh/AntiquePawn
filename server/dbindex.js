import mongoose from "mongoose";


export default async function dbConnect(){
    try{
        await mongoose.connect();
    } catch (err) {
        console.error(err);
    }
}








