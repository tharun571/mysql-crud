import ProductService from "../services/ProductService.js"

function ProductController() {
    const getAllProducts = (_, res) => {
        ProductService.getAllProducts.then((products) => {
            if(!products){
                res.status(500).send("Internal server error. Please try again later");
            }
            else {
                res.status(200).send(products);
            }
        
        
        });
    };

    const getAllProductsBought = (_, res) => {
        ProductService.getAllProductsBought.then((productsBought) => {
            if(!productsBought){
                res.status(500).send("Internal server error. Please try again later");
            }
            else {
                res.status(200).send(products);
            }
        
        
        });
    };

    const createProduct = (req, res) => {
        const vendor_number = req.body.vendor_number;
        const vendor_name = req.body.vendor_name;
        const product_name = req.body.product_name;
        const prod_qty = parseInt(req.body.product_quantity);

        if (!vendor_name || !vendor_number || !product_name || !prod_qty){
            return res.status(501).json({ message: "Fill all fields" });
        }
        const vendor = await Vendor.findOne({
                where: { firstName: vendor_name, phoneNo: vendor_number },
              });    
        if (vendor == null) {
            res.send("Vendor not found");
        } else {
            ProductService.createProduct(vendor.id, product_name, prod_qty).then(
                (product) => {
                    if(!product){
                        res.status(500).send("Internal Server Error. Please try again later");

                    }else {
                        res.status(201).send(product);
                    }
                }

            );
        }    



    };


    return{
        getAllProducts: getAllProducts,
        getAllProductsBought: getAllProductsBought,
        createProduct: createProduct
    }

}

export default ProductController();