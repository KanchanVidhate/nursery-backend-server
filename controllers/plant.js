import Plant from "../models/Plant.js"

const postPlant =  async (res,req)=>{
    const{name,
        category,
        image,
        prize,
        description}= req.body

        const newPlant= new Plant({
            name:name,
            category : category,
            image :  image,
            prize:  prize,
            description: description
        })

   const savedPlant = await newPlant.save();

         
   
       res.json({
        sucess:true,
        data:newPlant,
        message:"New plant added succesfully."
       })
   
    }
   
   // 
const getPlants=(res,req)=>{
    res.json({
        success:true,
        data:plants,
        message:"All plants fetched successfully"
    })

}

//
const getPlantId=(res,req)=>{
    const{id}=req.params
    const plant=plants.find((p)=> p.id==id)

    res.json({
        success:plant ? true : false,
        data:plant,
        message:plant ? "Plant fetched successfully" : "plant not found"
    })

}

//
const putPlantId=(req,res)=>{
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
  
}

//
const deletePlantId=(req,res)=>{
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

}

//


export{
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId

}