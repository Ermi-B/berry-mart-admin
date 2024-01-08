import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
export default async function handle(req,res){
    const {method} = req;

    await mongooseConnect()
    if(method === 'POST'){
        const {title,description,price,images} = req.body;

        const productDoc = await Product.create({
            title,description,price,images
        })
        res.json(productDoc);
    }
}