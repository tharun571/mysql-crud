const db = require("../db/DBConnection");

function ProductService() {
    return{
        getAllProducts: async () => {
            db.sequelize.sync();
            const products = await db.Product.findAll();
            return products;
          },

        getAllProductsBought: async () => {
            db.sequelize.sync();
            const productsBought = await db.Product.findAll();
            return productsBought;
          },  

        createProduct: async(vendor_name, vendor_number, product_name, prod_qty) => {
            db.sequelize.sync();
            const vendor = await db.Vendor.findOne({
                where: { firstName: vendor_name, phoneNo: vendor_number },
              });
            const product = await db.Product.create({
                productName: product_name,
                quantity: prod_qty,
                vendorId: vendor.vendorId,
              });
              console.log(product);
              return product
          },

        deleteProduct: async(productId) =>{
            db.sequelize.sync();
            const product = await db.Product.findByPk(productId);
            if (product == null) {
                res.send("No product found");
            } else {
                product.destroy();
                res.send("Done");
            }
        },  

        buyProduct : async(productId, customer_name, customer_number, quantity) => {
            db.sequelize.sync();
            const customer = await db.Customer.findOne({
                where: { firstName: customer_name, phoneNo: customer_number },
              });
              if (customer == null) {
                res.send("No customer");
              } else {
                const cusId = customer.id;
                const productBuy = await ProductBought.create({
                  customerId: parseInt(cusId),
                  productId: productId,
                  quantity: parseInt(quantity),
                });
                res.send(productBuy);
              }
        },

        updateProduct : async(productId, customer_name, customer_number, quantity) => {
            db.sequelize.sync();
            const customer = await db.Customer.findOne({
                where: { firstName: customer_name, phoneNo: customer_number },
              });
              const cusId = customer.id;
              const productBuy = await db.ProductBought.update(
                {
                  customerId: cusId,
                  productId: productId,
                  quantity: quantity,
                },
                {
                  where: {
                    customerId: cusId,
                  },
                }
              );
              res.send(productBuy);
        }
    };

}
module.exports = ProductService();
