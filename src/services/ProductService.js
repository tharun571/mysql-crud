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

        createProduct: async(vendorId, product_name, prod_qty) => {
            sequelize.sync();
            const product = await Product.create({
                productName: product_name,
                quantity: prod_qty,
                vendorId: vendorId,
              });
              console.log(product);
              return product
         }

    };

}
export default ProductService();
