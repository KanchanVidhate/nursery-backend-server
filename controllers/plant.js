
const postPlant = (res,req)=>{
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