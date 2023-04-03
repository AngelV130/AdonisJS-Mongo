import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm' 
import mongoose, {Schema} from 'mongoose'

const sensorSchema = new mongoose.Schema ({
  nombre: String,
  tipo: String,
  ubicacion: String,
  descripcion: String
},{
  versionKey: false,
  timestamps: true
})
module.exports  = mongoose.model("Sensor",sensorSchema,"senosresInfo")
