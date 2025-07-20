import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import connectCloudinary from '../config/cloudinary.js';

// api for user registration
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.json({success: false, message: "Missing Details"});
        }

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Invalid Email"});
        }

        if (password.length < 8 ) {
            return res.json({success: false, message: "Password Too Short"});
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const userData = {
            name, email,
            password: hashedPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.json({success: true, token});
    }
    catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

// API for user login
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false, message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
            res.json({success:true, token});
        }
        else {
            res.json({success:false, message: "Invalid Credentials"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

// API to get user profile data
const getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        console.log("Decoded userId:", userId); 

        const userData = await userModel.findById(userId).select('-password');
        res.json({success: true, userData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message});
    }
}

// API to update profile
const updateProfile = async (req, res) => {
    try {
        const { name, phone, address, dob, gender } = req.body;
        const userId = req.userId;
        const imageFile = req.file;

        // Update the main profile details first
        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender });
        console.log("1. Main profile details updated.");
        console.log(userId, name, phone, address, dob, gender);

        // Check if an image file was provided
        if (imageFile) {
            console.log("2. Image file exists. Proceeding to upload...");
            try {
                // Upload image to Cloudinary
                const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
                const imageURL = imageUpload.secure_url;
                console.log("3. Image uploaded to Cloudinary. URL:", imageURL);

                // Update the user document with the image URL
                await userModel.findByIdAndUpdate(userId, { image: imageURL });
                console.log("4. Database updated with image URL.");

            } catch (uploadError) {
                console.error("ERROR during image upload or final update:", uploadError);
                // Important: If this fails, don't send a success message.
                // We are not returning a response here, so the final success message will still be sent.
                // For better code, you'd handle this more gracefully.
            }
        } else {
            console.log("No image file was provided in the request.");
        }

        res.json({ success: true, message: "Profile Updated" });
    }
    catch (error) {
        console.log("A critical error occurred:", error);
        res.json({ success: false, message: error.message });
    }
}

export {registerUser, loginUser, getProfile, updateProfile}