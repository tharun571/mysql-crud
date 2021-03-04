module.exports = (sequelize, DataTypes) => {
  const Vendors = sequelize.define("Vendors", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNo: {
      type: DataTypes.BIGINT(10),
      allowNull: false,
    },
  });
  Vendors.associate = (models) => {
    Vendors.hasMany(models.Products, {
      onDelete: "cascade",
    });
  };
  return Vendors;
};
