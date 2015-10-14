/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuny_dissertations', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    program: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adviser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
     description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true
  });
};