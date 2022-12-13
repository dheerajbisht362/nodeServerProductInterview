import mongoose from "mongoose";

const productSchema  = new mongoose.Schema({
  productId: 'number', 
  quantity: 'number'
})

export const ProductModel = mongoose.model("Product", productSchema)
