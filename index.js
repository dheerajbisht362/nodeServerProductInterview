import express from 'express'
import {ProductModel} from "./products.schema.js"
const app = express()
const port = "3000"


app.post("/",(req,res)=>{
  try{
    const payload = req.body
    payload.forEach(req=>{
      let quantity
      if(req.operation === "add"){
        quantity = req.quantity
      }else if(req.operation === "subtract"){
        quantity = -req.quantity
      }
      const record = ProductModel.findOneAndUpdate({productId: req.productId}, { quantity: { $inc: quantity }})
    })
    res.status(200).send("Successfully completed operations")
  }catch(err){
    console.log("Error posting data to server",err)
    res.status(401).send("Server Error")
  }
})

app.listen(port,()=>{
  console.log(`Listening to port ${port}`);
})
