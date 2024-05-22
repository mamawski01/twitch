import User from '../../models/User.js';

export async function getChannels(req, res) {
  try {
    const users = await User.find(
      {},
      {
        channel: 1,
        username: 1,
      }
    ).populate('channel');

    const channels = users.filter((user) =>
      user.channel.isActive.map((user) => {
        return {
          id: user.channel._id,
          title: user.channel.title,
          avatarUrl: user.channel.avatarUrl,
          username: user.username,
          isOnline: false,
        };
      })
    );
    return res.json({});
  } catch (error) {
    console.log(error);
    return res.status(500).message('Something went wrong');
  }
}
