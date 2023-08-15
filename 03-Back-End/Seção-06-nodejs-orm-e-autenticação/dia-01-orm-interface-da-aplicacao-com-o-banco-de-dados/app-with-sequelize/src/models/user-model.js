// src/models/user.model.js

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING, //  aqui inserimos o datatype da coluna criada
  });

  return User;
};

module.exports = User;