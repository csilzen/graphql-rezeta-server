'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      tyle: DataTypes.STRING,
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Recipe;
};