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
        field: 'first_name',
      },
      password: {
        type: DataTypes.STRING,
        field: 'first_name',
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
