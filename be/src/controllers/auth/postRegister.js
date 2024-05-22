import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../../models/User.js';
import Channel from '../../models/Channel.js';

export async function postRegister(req, res) {
  try {
    const { username, email, password } = req.body;

    const userExist = await User.exists({ email });
    if (userExist) {
      return res.status(409).send('Email already exists');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newChannel = await Channel.create({});

    const user = await User.create({
      username,
      email,
      password: encryptedPassword,
      channel: newChannel._id,
    });
    console.log(user); //able to get the user details
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
    return res.status(201).json({
      messageKier: 'User save to db',
      userDetails: {
        email: user.email,
        username,
        token,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Internal Server Error');
  }
}

/* for basic
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
      email,
      password: encryptedPassword,
    });
    console.log(user); //able to get the user details
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
    return res.status(201).json({
      messageKier: 'User save to db',
      userDetails: {
        email: user.email,
        username,
        token,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Internal Server Error');
  }
}*/
