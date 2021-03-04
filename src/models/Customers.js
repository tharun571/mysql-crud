module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customers", {
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(20),
    },
    phoneNo: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Customer.associate = (models) => {
    Customer.hasMany(models.ProductsBought, {
      onDelete: "cascade",
    });
  };
  return Customer;
};
