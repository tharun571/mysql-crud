const db = require("../db/DBConnection");

function VendorServices() {
  return {
    getAll: async () => {
      db.sequelize.sync();
      const vendors = await db.Vendors.findAll();
      return vendors;
    },
    getById: async (id) => {
      db.sequelize.sync();
      return await db.Vendors.findByPk(id);
    },
    createVendor: async(firstName,lastName,phNum) => {
        db.sequelize.sync();
        const vendor = await db.Vendors.create({
            firstName: firstName,
            lastName: lastName,
            phoneNo: phNum,
          });
          console.log(vendor);
          return vendor;
    },
    deleteVendor: async(id) =>  {
        db.sequelize.sync();
        return await db.Vendors.findByPk(id);
      }
  };
}

module.exports = VendorServices();
