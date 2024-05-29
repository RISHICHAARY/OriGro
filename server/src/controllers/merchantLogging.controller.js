const bcrypt = require('bcrypt');
const pool = require('../dbconfig/db.config');
const quries = require('../models/merchantLogging.model');
const { tokenGenerator, tokenGeneratorForMerchant } = require('../helpers/jwtHelpers');

const mailgun = require("mailgun-js");
const DOMAIN = "sandbox1a4c0da5377f49e69fa4a80bedb13e2d.mailgun.org";
const mg = mailgun({apiKey: "f81255058802e6cd567349e44c23576d-7ecaf6b5-ab4f90a9", domain: DOMAIN});

const addMerchant = async( req , res ) => {
    const {
        first_name,
        middle_name,
        last_name,
        email_id,
        mobile_number,
        door_no,
        city,
        state,
        pincode,
        lattitude,
        longitude,
        npop_id,
        merchandise_name,
        device_token,
        password
    } = req.body;

    const checkMerchant = await pool.query(quries.checkMerchant, [email_id,mobile_number,merchandise_name]);

    if(checkMerchant.rowCount != 0){
        res.status(400).json({"message":"Merchandise already exist"});
    }
    else{
        const encryptedPassword = await bcrypt.hash(password,10);
        const addMerchant = await pool.query(quries.addMerchant, [
            first_name,
            middle_name,
            last_name,
            email_id,
            mobile_number,
            door_no,
            city,
            state,
            pincode,
            lattitude,
            longitude,
            merchandise_name,
            npop_id,
            "active",
            "new",
            0,
            device_token,
            encryptedPassword
        ]);
        
        if(addMerchant.rowCount == 1){
            res.status(200).json({"message":"Merchant added successfully"})
        }
        else{
            res.status(400).json({"message":"Something went wrong. Unable to add merchandise."})
        }
    }
}

const verifyMerchant = async(req,res) =>{
    const { email_id,password } = req.body;
    
    const getMerchant = await pool.query(quries.getMerchant, [email_id]);
    console.log(getMerchant.rows[0]);
    if(getMerchant.rowCount == 0){
        res.status(400).json({"message":"No merchant found"});
    }
    else if(getMerchant.rows[0].status != "active"){
        res.status(400).json({"message":"Account inactive"});
    }
    else{
        const passwordCheck = bcrypt.compare(password,getMerchant.rows[0].password);
        if(!passwordCheck){
            res.status(400).json({"message":"Incorrect password"});
        }
        else{
            const cookieData = {"merchant_id":getMerchant.rows[0].merchant_id,"email_id":getMerchant.rows[0].email_id};
            const accessToken = tokenGeneratorForMerchant(cookieData);
            res.cookie( "access-token",accessToken,{
                maxAge: 60*60*24*1000,
                secure:false
            } );
            res.status(200).json({
                "data":cookieData,
                "message": "Logged successfully"
            });
        }
    }
}

const verifyCookie = (req,res) =>{
    res.status(200).json({
        "data": req.cookieData,
        "message":"Cookie is verified successfully"
    });
}

const sendOtp = (req,res) =>{
    const {email_id} = req.body;

    const OTP = Math.floor(Math.random() * (999999 - 111111 + 1) + 111111)
    const data = {
        from: "Excited User <mailgun@sandbox-123.mailgun.org>",
        to: email_id,
        subject: "OTP to access your ORIGRO account",
        template: "origro-otp",
        'h:X-Mailgun-Variables': JSON.stringify({OTP:OTP})
    };
    mg.messages().send(data, function (error, body) {
        if(error){
            console.log(error);
            res.status(200).json({"message":"Something went wrong. Unable to send OTP"});
        }
        else{
            res.status(200).json({
                "message":"Mail otp sent successfully",
                "otp":OTP
            });
        }
    });
}

module.exports = {
    addMerchant,
    verifyMerchant,
    verifyCookie,
    sendOtp
}