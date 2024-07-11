import express from 'express';

const app=express();

app.use(express.json())

 const plants=[
    {
        "id": 5,
        "name": "Blue Rose",
        "prize":"150",
        "category": "indoor",
        "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/GettyImages-680832819_321282711_479035882-615x400.jpg",
        "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
    }
,
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

 //create resource
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
         if(!description){
               return res.json({
            success:false,
            data:null,
            message:"Description is required"
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
app.get("/plants",(req,res)=>{
    res.json({
        success:true,
        data:plants,
        message:"All plants fetched successfully"
    })
})

app.get("/plant/:id",(req,res)=>{
    const{id}=req.params
    const plant=plants.find((p)=> p.id==id)

    res.json({
        success:plant ? true : false,
        data:plant,
        message:plant ? "Plant fetched successfully" : "plant not found"
    })
})

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
   }
  
})


const PORT=5000;
app.listen(PORT,()=>{
   console.log(`server is running on port ${PORT}`)
})
