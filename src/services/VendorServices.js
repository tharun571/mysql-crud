import { sequelize } from "../db/DBConnection.js";
import { Vendors } from "../models/Vendors.js";

function VendorServices() {
  return {
    getAll: () => async () => {
      sequelize.sync();
      await Vendors.findAll();
    },
    createVendor: (firstName,lastName,phNum) => async() => {
        sequelize.sync();
        await Vendors.create({
            firstName: firstName,
            lastName: lastName,
            phoneNo: phNum,
          });
    },
    deleteVendor: (id) => async () => {
        sequelize.sync();
        const vendor = await Vendor.findByPk(id);
        if (vendor == null) {
          
        } else {
          vendor.destroy();
          res.send("Done");
        }
      }
  };
}

module.exports = VendorServices();
