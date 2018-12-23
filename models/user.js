module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      userName: {
        type: DataTypes.STRING,
        field: 'username',
      },
      password: {
        type: DataTypes.STRING,
        field: 'password',
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'users',
    },
  )
  // user.associate = function(models) {
  //   // associations can be defined here
  // }
  return users
}
