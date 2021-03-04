import { sequelize } from "../db/DBConnection.js";
import { Vendors } from "../models/Vendors.js";

function VendorServices() {
  return {
    getAll: async () => {
      sequelize.sync();
      const vendors = await Vendors.findAll();
      return vendors;
    },
    getById: async (id) => {
      sequelize.sync();
      return await Vendors.findByPk(id);
    },
    createVendor: async(firstName,lastName,phNum) => {
        sequelize.sync();
        const vendor = await Vendors.create({
            firstName: firstName,
            lastName: lastName,
            phoneNo: phNum,
          });
          console.log(vendor);
          return vendor;
    },
    deleteVendor: async(id) =>  {
        sequelize.sync();
        const vendor = await Vendor.findByPk(id);
        return vendor;
      }
  };
}

export default VendorServices();
