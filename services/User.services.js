const { Users } = require('../models');

module.exports = {
  createUser: async (displayName, email, password, image) =>
    Users.create({
      displayName,
      email,
      password,
      image,
    }), // return newUser;

  getUsers: async () => {
    const users = await Users.findAll();
    console.log(users);
    return users;
  },
};
