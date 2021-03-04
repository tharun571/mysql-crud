import VendorServices from "../services/VendorServices.js";

function VendorController() {
  const getAllVendors = function(_, res) {
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
        res.status(200).send(customer);
      }
    });
  };

  const createVendor = (req, res) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const phoneNo = parseInt(req.body.phone_number);
    if (!firstName || !lastName || !phoneNo) {
      return res.status(501).json({ message: "Fill all fields" });
    }
    VendorServices.createVendor(firstName, lastName, phoneNo).then(
      (vendor) => {
        if (!vendor) {
          res.status(500).send("Internal Server Error. Please try again later");
        } else {
          res.status(201).send(customer);
        }
      }
    );
  };

  const deleteVendor = (req,res) => {
    const vendorId = req.body.id;
    VendorServices.deleteVendor(vendorId).then((vendor) => {
      if(vendor == null){
        res.status(404).json({ message: "Vendor not found" });
      }
      else{
        vendor.destroy();
        res.status(200).json({ message: "Vendor successfully deleted" });
      }
    });
  }

  return {
    getAll: getAllVendors,
    getById: getVendorById,
    createVendor: createVendor,
  };

}

module.exports = VendorController();
