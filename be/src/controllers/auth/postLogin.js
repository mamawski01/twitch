import User from '../../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function postLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      //create JWT token
      const token = jwt.sign(
        //user details
        {
          userId: user._id,
          email: user.email,
        },
        //secret key
        process.env.TOKEN_KEY,
        //additional options
        {
          expiresIn: '8h',
        }
      );
      //send successful response back to client with registered user and JWT
    }

    return res.status(400).send('Invalid credentials');
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Internal Server Error');
  }
}
