import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const signUp = async (req, res) => {
    try {
        const {username, password} = req.body; //get form data

        //check if data valid and doesn't already exist

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); //create hashed password with salt
        
        //create user
        const user = new User({
            firstName: firstName,
            lastName : lastName,
            email: email,
            username : username, 
            password: hashedPassword
        });
        
        //login and set new user
        if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				email: newUser.email,
				followers: newUser.followers,
				following: newUser.following,
				profileImg: newUser.profileImg,
				coverImg: newUser.coverImg,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
    }
    catch (error){
        res.status(500).json({error: 'Registration failed'});
    };
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if (!user){
            return res.status(401).json({error : 'Auth failed'});
        }
        const token = jwt.sign({userId : user._id}, 'KEY', {
            expiresIn : '15d'
        });
        res.status(200).json({token});
    }
    catch (error){
        res.status(500).json({error : 'Login failed'});
    };
};

export const logout = async (req,res) => {
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};