const pool = require('../dbconfig/db.config');
const quries = require('../models/procuts.model');

const addProduct = async(req,res) =>{

    const { merchant_id, name, description, category, price, stock, image } = req.body;

    try{
        const addProduct = await pool.query(quries.addProduct, [
            merchant_id,
            name,
            description,
            category,
            price,
            stock,
            image
        ]);
    
        if(addProduct.rowCount == 1){
            res.status(200).json({"message":"Product added successfully."});
        }
        else{
            res.status(400).json({"message":"Something went wrong. Unable to add product."});
        }
    }
    catch(error){
        res.status(400).json({"message":"Merchant id mismatch"});
    }
}

const updateProduct = async(req,res) => {

    const {old_price, price, old_stock, stock, product_id, merchant_id} = req.body;

    try{
        const updateProduct = await pool.query(quries.updateProduct, [
            old_price,
            price,
            old_stock,
            stock,
            product_id,
            merchant_id
        ]);
        if(updateProduct.rowCount == 1){
            res.status(200).json({"message":"Product updated successfully."});
        }
        else{
            res.status(400).json({"message":"Something went wrong. Unable to update product."});
        }
    }
    catch(error){
        res.status(400).json({"message":"Something went wrong. Unable to update product."});
    }
}

const deleteProduct = async(req,res) =>{

    const {product_id,merchant_id} = req.body;

    try{
        const deleteProduct = await pool.query(quries.deleteProduct, [product_id,merchant_id]);
        if(deleteProduct.rowCount == 1){
            res.status(200).json({"message":"Product deleted successfully."});
        }
        else{
            res.status(400).json({"message":"Something went wrong. Unable to delete product."});
        }
    }
    catch(error){
        res.status(400).json({"message":"Something went wrong. Unable to delete product."});
    }
}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
}