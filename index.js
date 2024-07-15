import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

import { getHealth } from './controllers/health.js';
import { postPlant,getPlants,getPlantId ,putPlantId,deletePlantId,useAll} from './controllers/plant.js';


const app=express();

app.use(express.json())

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
      
   
 app.use("*",useAll)
   
const PORT=process.env.PORT
app.listen(PORT,()=>{
   console.log(`server is running on port ${PORT}`)
})
