'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    dimensions: DataTypes.STRING,
    isFragile: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};