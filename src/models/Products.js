module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    productName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
  });
  Products.associate = (models) => {
    Products.belongsTo(models.Vendors, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Products;
};
