"use server";
import bcrypt from "bcryptjs";
import User from "./model/user";
import connectDB from "./db/db";

connectDB();
export async function saveData(formData) {

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        !name && { error: 'Fill  in your name' }
        !email && { error: 'Fill  in your email' }
        !password && { error: 'Fill  in your password' }
        password.length < 8 && { error: 'Password must be at least 8 characters long' }
        if (!name || !email || !password) {
            return { error: 'All fields are required' };
        }
        if (password.length < 8) {
            return { error: 'Password must be at least 8 characters long' };
        }

        const user = await User.findOne({ email });
        if (user) {
            return { error: 'Email already exists' };
        }
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPass
        })

        await newUser.save()

        return { success: 'User created successfully' , status:200 , user:{name,email} }
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }

}