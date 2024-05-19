import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function postRegister(req, res) {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.exists({ email });
    if (userExist) {
      return res.status(409).send('Email already exists');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    console.log(user); //able to get the user details
    //create JWT token
    const token = jwt.sign(
      //user details
      {
        userId: user._id,
        email,
      },
      //secret key
      process.env.TOKEN_KEY,
      //additional options
      {
        expiresIn: '8h',
      }
    );

    //send successful response back to client with registered user and JWT
    return res.status(201).json({
      message: 'User save to db',
      userDetails: {
        email,
        username,
        token,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Internal Server Error');
  }
}
