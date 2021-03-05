const db = require("../db/DBConnection");

function VendorServices() {
  return {
    getAll: async () => {
      db.sequelize.sync();
      const vendors = await dB.Vendors.findAll();
      return vendors;
    },
    getById: async (id) => {
      db.sequelize.sync();
      return await dB.Vendors.findByPk(id);
    },
    createVendor: async(firstName,lastName,phNum) => {
        db.sequelize.sync();
        const vendor = await dB.Vendors.create({
            firstName: firstName,
            lastName: lastName,
            phoneNo: phNum,
          });
          console.log(vendor);
          return vendor;
    },
    deleteVendor: async(id) =>  {
        db.sequelize.sync();
        const vendor = await dB.Vendor.findByPk(id);
        return vendor;
      }
  };
}

export default VendorServices();
