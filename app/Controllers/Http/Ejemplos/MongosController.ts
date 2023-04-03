// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from "mongoose";
const model = require("App/Models/Sensor")
export default class MongosController {
    public async index({request}) {
        try{
        await mongoose.connect('mongodb://localhost:27017/Sensores');
        await model.create(request.body())
        const sensores = await model.find({}).exec()
        await mongoose.connection.close();
        return sensores
        }catch(error){
            console.error(error);
        }
    }
}
