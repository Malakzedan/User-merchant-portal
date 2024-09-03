const { findSourceMap } = require('module');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity=require("joi-password-complexity");
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // companyName: String,
    // accountNumber: String,
    // balance: Number,
    // firstName:{type:String , required:true},
    // lastName:{type: String ,required:true},
    // email:{type:String , required:true},
    // password:{type:String , required:true},
});

// userSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({id:this_id},process.env.JWTPRIVATEKEY,{expressIn:"7d"})
//     return token 
// };

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user",userSchema);

const validate=(data)=>
{
    const schema = Joi.object({

    email: Joi.string().email().required().label('Email'),
    username: Joi.string().required().label('Username'),
    fullName: Joi.string().required().label('Full Name'),
    mobileNumber: Joi.string().required().label('Mobile Number'),
    password: passwordComplexity().required().label('Password'),

        // firstName:Joi.string().required().label("First Name"),
        // lastName:Joi.string().required().label("Last Name"),
        // email:Joi.string().email().required().label("Email"),
        // password:passwordComplexity().required().label("Password")
    });
        return schema.validate(data)
        
};

module.exports ={User,validate}
    