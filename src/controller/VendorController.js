const VendorServices = require("../services/VendorServices.js");

function VendorController() {
  const getAllVendors = (_, res) => {
    VendorServices.getAll().then((vendors) => {
      if (vendors == null) {
        res.status(500).send("Internal server error. Please try again later");
      } else {
        res.status(200).send(vendors);
      }
    });
  };

  const getVendorById = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    VendorServices.getById(id).then((vendor) => {
      if (vendor == null) {
        res.status(404).json({ message: "Vendor not found" });
      } else {
        res.status(200).send(vendor);
      }
    });
  };

  const createVendor = (req, res) => {
    const firstName = req.body.vendor_first_name;
    const lastName = req.body.vendor_last_name;
    const phoneNo = parseInt(req.body.vendor_phoneNo);
    if (!firstName || !lastName || !phoneNo) {
      return res.status(501).json({ message: "Fill all fields" });
    }
    VendorServices.createVendor(firstName, lastName, phoneNo).then(
      (vendor) => {
        console.log(vendor);
        if (!vendor) {
          res.status(500).send("Internal Server Error. Please try again later");
        } else {
          res.status(201).send(vendor);
        }
      }
    );
  };

  const deleteVendor = (req,res) => {
    const vendorId = req.params.id;
    console.log(vendorId)
    VendorServices.deleteVendor(vendorId).then((vendor) => {
      if(vendor == null){
        res.status(404).json({ message: "Vendor not found" });
      }
      else{
        console.log(vendor)
        vendor.destroy();
        res.status(200).json({ message: "Vendor successfully deleted" });
      }
    });
  }

  return {
    getAll: getAllVendors,
    getById: getVendorById,
    createVendor: createVendor,
    deleteVendor: deleteVendor,
  };

}

module.exports = VendorController();
