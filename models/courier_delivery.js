'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courier_Delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Item, {
        foreignKey: 'deliveryId'
      })
    }
  }
  Courier_Delivery.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Processing'
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Courier_Delivery',
  });
  return Courier_Delivery;
};