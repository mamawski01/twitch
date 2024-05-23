import User from '../../models/User.js';

export async function postFollowChannel(req, res) {
  try {
    const { userId } = req.user;

    const { channelId } = req.body;

    const userData = await User.findById(userId, { followedChannels: 1 });

    if (userData.followedChannels.includes(channelId)) {
      return res.status(400).send('Channel already followed');
    }

    userData.followedChannels.push(channelId);

    await userData.save();

    return res.status(200).send('Channel followed successfully');
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Something went wrong');
  }
}
