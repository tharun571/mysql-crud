import { sequelize } from "../db/DBConnection.js";
import { Product } from "../models/Products.js";
import { ProductBought } from "../models/ProductsBought.js";

function ProductService() {
    return{
        getAllProducts: async () => {
            sequelize.sync();
            const products = await Product.findAll();
            return products;
          },

        getAllProductsBought: async () => {
            sequelize.sync();
            const productsBought = await Product.findAll();
            return productsBought;
          },  

        createProduct: async(vendor_name, vendor_number, product_name, prod_qty) => {
            sequelize.sync();
            const vendor = await Vendor.findOne({
                where: { firstName: vendor_name, phoneNo: vendor_number },
              });
            const product = await Product.create({
                productName: product_name,
                quantity: prod_qty,
                vendorId: vendor.vendorId,
              });
              console.log(product);
              return product
          },

        deleteProduct: async(productId) =>{
            sequelize.sync();
            const product = await Product.findByPk(productId);
            if (product == null) {
                res.send("No product found");
            } else {
                product.destroy();
                res.send("Done");
            }
        },  

        buyProduct : async(productId, customer_name, customer_number, quantity) => {
            sequelize.sync();
            const customer = await Customer.findOne({
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
            sequelize.sync();
            const customer = await Customer.findOne({
                where: { firstName: customer_name, phoneNo: customer_number },
              });
              const cusId = customer.id;
              const productBuy = await ProductBought.update(
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
export default ProductService();
