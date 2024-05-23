import bcrypt from 'bcryptjs';

import User from '../../models/User.js';

export async function patchChangePassword(req, res) {
  try {
    const { userId } = req.user;

    const { password, newPassword } = req.body;

    const userData = await User.findById(userId, { password: 1 });

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.status(400).send('Invalid password');
    }

    //encrypt password
    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    //update user document
    await User.updateOne({ _id: userId }, { password: encryptedPassword });
    return res.status(200).send('Password updated successfully');
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong');
  }
}
