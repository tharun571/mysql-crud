module.exports = (sequelize, DataTypes) => {
  const ProductsBought = sequelize.define("ProductsBought", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  ProductsBought.associate = (models) => {
    ProductsBought.belongsTo(models.Products, {
      foreignKey: {
        allowNull: false,
      },
    });
    ProductsBought.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return ProductsBought;
};
