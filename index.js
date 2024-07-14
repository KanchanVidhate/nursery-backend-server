import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

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

 
 //temporary data store

 //for  create plant
 app.post("/plant",(req,res)=>{
    const{name,
     category,
     image,
     prize,
     description}= req.body

     if(!name){
       return res.json({
            success:false,
            data:null,
            message:"Name is required"
        })
         }
         if(!category){
               return res.json({
            success:false,
            data:null,
            message:"Category is required"
        })
         }
         if(!image){
               return res.json({
            success:false,
            data:null,
            message:"Image is required"
        })
         }
         if(!prize){
               return res.json({
            success:false,
            data:null,
            message:"Prize is required"
        })
         }
       


   const randomId=Math.round(Math.random()*10000)

   const newPlant = {
     id:randomId,
     name:name,
     category:category,
     image:image,
     prize:prize,
     descrition:description
     
   }

   plants.push(newPlant)

    res.json({
     sucess:true,
     data:newPlant,
     message:"New plant added succesfully."
    })

 })

 // for read
app.get("/plants",(req,res)=>{
    res.json({
        success:true,
        data:plants,
        message:"All plants fetched successfully"
    })
})

//read plants
app.get("/plant/:id",(req,res)=>{
    const{id}=req.params
    const plant=plants.find((p)=> p.id==id)

    res.json({
        success:plant ? true : false,
        data:plant,
        message:plant ? "Plant fetched successfully" : "plant not found"
    })
})

// for update
app.put ("/plant/:id",(req,res)=>{
    const{name,
        category,
        image,
        prize,
        description}= req.body
    const {id} =req.params

    let index = -1 
    plants.forEach((plant,i)=>{
        if(plant.id==id){
            index=i 
        }
    })


    const newObj = {
        id,
        name,
        category,
        image,
        prize,
        description
    }
 if (index == -1){
    return res.json({
        success:false,
        data:null,
        message:`Plant not found for id ${id}`,
     })
   }
   else{
    plants[index] = newObj
    
    res.json({
        success:true,
        data:newObj,
        message:`Plant updated successfully`
      })
  }
  
 })

 //for delete
 app.delete("/plant/:id",(req,res)=>{
     const{id}=req.params
     let index = -1
     plants.forEach((plant,i)=>{
         
         if(plant.id==id){
             index=i
         }
     }) 

 if(index == -1){
       return res.json({
         success:false,
         data:null,
         message:`Plant not found for id ${id}`,
     })
      }
       else{
           plants.splice(index,1)
           res.json({
               success:true,
               data:null,
               message:`Plant deleted successfully`
           })
         }
     })
      
     
 app.use("*",(req,res)=>{
    res.send( `<div>
        <h1 style="text-align:center;">404 Page not found</h1>
        <div>`)
     })
   
const PORT=process.env.PORT
app.listen(PORT,()=>{
   console.log(`server is running on port ${PORT}`)
})
