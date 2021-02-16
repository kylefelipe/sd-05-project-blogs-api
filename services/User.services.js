const { Users } = require('../models');

module.exports = {
  createUser: async (displayName, email, password, image) => {
    const newUser = await Users.create({
      displayName,
      email,
      password,
      image,
    });
    return newUser;
  },
};