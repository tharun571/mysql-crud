const db = require("../db/DBConnection");

function ProductService() {
    return{
        getAllProducts: async () => {
            db.sequelize.sync();
            const products = await db.Products.findAll();
            return products;
          },

        getAllProductsBought: async () => {
            db.sequelize.sync();
            const productsBought = await db.Products.findAll();
            return productsBought;
          },  

        createProduct: async(vendor_name, vendor_number, product_name, prod_qty) => {
            db.sequelize.sync();
            const vendor = await db.Vendors.findOne({
                where: { firstName: vendor_name, phoneNo: vendor_number },
              });
              if(vendor ==null){
                return "404";
              }
            const vendorId = vendor.id;
            console.log(vendorId);
            const product = await db.Products.create({
                productName: product_name,
                quantity: prod_qty,
                Ven: vendorId,
              });
              console.log(product);
              return product
          },

        deleteProduct: async(productId) =>{
            db.sequelize.sync();
            const product = await db.Products.findByPk(productId);
            if (product == null) {
                res.send("No product found");
            } else {
                product.destroy();
                res.send("Done");
            }
        },  

        buyProduct : async(productId, customer_name, customer_number, quantity) => {
            db.sequelize.sync();
            const customer = await db.Customers.findOne({
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
            const customer = await db.Customers.findOne({
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
