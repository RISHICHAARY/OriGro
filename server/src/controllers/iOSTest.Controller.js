const pool = require('../dbconfig/db.config');
const quries = require('../models/iOSTest.model');

const addForm = async(req,res) => {
    try{
        const addForm = await pool.query(quries.addForm, []);
        const testAdd1 = await pool.query(quries.testAdd, []);
        const testAdd2 = await pool.query(quries.testAdd, []);
        res.status(200).json({"message":"form added successfully"});
    }
    catch(error){
        console.log(error)
        res.status(201).json({"message":"viwe console for error"});
    }
}

module.exports = {
    addForm,
}