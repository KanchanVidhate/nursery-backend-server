import Plant from "../models/Plant.js"

  const plants = [
    {
        
            "id":5,
            "name": "Blue Rose",
            "prize":"150",
            "category": "indoor",
            "image": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2019/07/GettyImages-680832819_321282711_479035882-615x400.jpg",
            "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
        },
        {
            "id":6,
            "name": "Red Rose",
            "prize":"200",
            "category": "indoor",
            "image": "https://www.gardeningknowhow.com/wp-content/uploads/2017/09/red-rose.jpg",
            "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
        },
        {
            "id":7,
            "name": "Yellow Rose",
            "prize":"250",
            "category": "indoor",
            "image": "https://www.gardeningknowhow.com/wp-content/uploads/2017/09/yellow-rose.jpg",
            "description": "SeedsVille Blue Climbing Rose Flower Seeds is a perfect choice for those who want to add some color and beauty to their garden."
        }
    
  ]


const postPlant =  async (res,req)=>{

     const {
        name,
        category,
        image,prize,
        description}= req.body
        
   
   
        const newPlant= new Plant({
            name,
            category,
            image,
           prize,
            description
        })

   const savedPlant = await newPlant.save();

         
   
       res.json({
        sucess:true,
        data:newPlant,
        message:"New plant added succesfully."
       })
   
    }
   
   // 
const getPlants= async (res,req)=>{

     const allPlants = await  Plant.find()

    res.json({
        success:true,
        data : allPlants,
        message:"All plants fetched successfully"
    })

}

//
const getPlantId= async (res,req)=>{
    const{id}= req.params

    const plant = await Plant.findById(id )

    res.json({
        success:plant ? true : false,
        data:plant || null ,
        message:plant ? "Plant fetched successfully" : "plant not found"
    })

}

//
const putPlantId= async(req,res)=>{
    const{name,
        category,
        image,
        prize,
        description}= req.body
    const {id} =req.params
   
     const updateReasult = await Plant.updateOne({_id:id},{
        $set:{name,
            category: category,
            image:image,  
            prize:  prize,
            description:  description}
     })

      res.json({
        succes: true,
        data:updateReasult,
        message:"Plant updated successfully"
      })
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