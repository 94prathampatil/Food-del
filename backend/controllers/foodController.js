import foodModel from "../models/foodModel.js";
import fs from 'fs'


// add food item

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success:true, message:"Food Added to Database"})
    }
    catch (error) {
        console.log(error)
        res.json({ success: false,message:"Error..! While adding Food"})
    }
}

// all food list

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(eroor)
        res.json({ success: false, message: "Error" })
    }
}

// Remove food items
const removeFood = async (req, res) => {
    try {
        const foodItem = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${foodItem.image}`, () => { })
        
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Failed"})
    }
}

export { addFood, listFood, removeFood };