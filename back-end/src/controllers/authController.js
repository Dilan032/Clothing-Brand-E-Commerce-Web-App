import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register function
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({
                message: "Email already exists"
            });

        const hashedPassword = await bcrypt.hash(password, 8);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully", user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



// login function
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user if exisit
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({
                message: "Invalid email or password"
            });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({
                message: "Invalid email or password"
            });

        // jwt token generation
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN}
        );

        res.json({ 
            message: "Login successful", 
            token,
            user
        });
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};
