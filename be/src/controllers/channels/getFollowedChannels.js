import User from '../../models/User.js';

export async function getFollowedChannels(req, res) {
  try {
    const { userId } = req.user;

    const { followedChannels } = await User.findById(userId, {
      followedChannels: 1,
    });
    return res.status(200).json({ followedChannels });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong');
  }
}
