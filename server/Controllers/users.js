const user = require('../Models/User.js');
const getUser = async (req, res) => {
  const users = await user.find();
  return res.status(200).json(users);
};

module.exports = getUser;
