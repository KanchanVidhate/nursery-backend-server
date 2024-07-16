import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
import mongoose from 'mongoose';

import { getHealth } from './controllers/health.js';
import { postPlant,getPlants,getPlantId ,putPlantId,deletePlantId,} from './controllers/plant.js';
import { errorFound  } from './controllers/errors.js';


const app=express();

app.use(express.json())

const dbConnection = async ()=>{
    const  conn = await mongoose.connect(process.env.MONGO_URL)

   if(conn){
    console.log("connected to database... ")
   }
   else{
       console.log("not connected to database")
   }
}
dbConnection();


 const plants=[
    {
        "id":5,
        "name": "Blue Rose",
        "prize":"150",
        "category": "indoor",
        "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/GettyImages-680832819_321282711_479035882-615x400.jpg",
        "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
    },
    {
        "id": 2,
        "name": "Bamboo",
        "prize":"170",
        "category": "outdoor",
        "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/GettyImages-680832819_321282711_479035882-615x400.jpg",
        "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
    },

    {
        "id": 8,
        "name": "Banana",
        "prize":"250",
        "category": "outdoor",
        "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/GettyImages-680832819_321282711_479035882-615x400.jpg",
        "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
    }
 ]

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
