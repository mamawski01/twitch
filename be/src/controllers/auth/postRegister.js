export async function postRegister(req, res) {
  try {
    return res.send('Register route');
  } catch (error) {
    console.log(error.message);
  }
}
