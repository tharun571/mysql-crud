const Vendors = require("../services/VendorServices.js")

function VendorController() {
  const getAllVendors = function(_, res) {
    Vendors.getAll().then(vendors => res.send(vendors));
  };
  const createVendor = (req,res) => {
    const firstName = req.body.vendor_first_name;
    const lastName = req.body.vendor_last_name;
    const phNum = parseInt(req.body.vendor_number);
    VendorServices.createVendor(firstName,lastName,phNum).then(vendor => res.send(vendor));;
  }

  const deleteVendor = (req,res) => {
      const vendorId = req.body.id;
      VendorServices.deleteVendor(vendorId).then(message => res.send(message))
  }
}

module.exports = VendorController();
