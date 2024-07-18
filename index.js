import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

import mongoose from 'mongoose';

import { getHealth } from './controllers/health.js';
import { postPlant,
          getPlants,
          getPlantId ,
          putPlantId,
          deletePlantId,} from './controllers/plant.js';

import { errorFound  } from './controllers/errors.js';




const app = express()

app.use(express.json())

const dbConnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    
    if(conn){
      console.log(`MongoDB  connected`)

    }
    else{
      console.log('MongoDB not connected')
    }
  }
    dbConnection();

 

 app.get("/health",getHealth)
 //for  create plant
 app.post("/plant",postPlant)
 // for read
app.get("/plants", getPlants)
  //read plants
app.get("/plant/:id", getPlantId)
   // for update
app.put ("/plant/:id",putPlantId)
    //for delete
 app.delete("/plant/:id",deletePlantId)  
   
 app.use("*",errorFound)
   

 const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
   console.log(`server is running on port ${PORT}`)
})
