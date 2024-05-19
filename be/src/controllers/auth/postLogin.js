export async function postLogin(req, res) {
  try {
    return res.send('login route');
  } catch (error) {
    console.log(error.message);
  }
}
