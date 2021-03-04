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
                res.status(200).send(productsBought);
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
        if (vendor == null) {
            res.send("Vendor not found");
        } else {
            ProductService.createProduct(vendor_name, vendor_number, product_name, prod_qty).then(
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

    const deleteProduct = (req, res) => {
        ProductService.deleteProduct(req.body.id).then(
            (product) => {
                if(!product){
                    res.status(500).send("Internal Server Error. Please try again later");

                }else {
                    res.status(201).send(product);
                }
            }
        );
    };

    const buyProduct = (req, res) => {
        const productId = parseInt(req.body.product_id);
        const customer_name = req.body.customer_name;
        const customer_number = parseInt(req.body.customer_number);
        const quantity = parseInt(req.body.product_quantity);

        ProductService.buyProduct(productId, customer_name, customer_number, quantity).then(
            (productBuy) => {
                if(!productBuy){
                    res.status(500).send("Internal Server Error. Please try again later");

                }else {
                    res.status(201).send(productBuy);
                }
            }
        );
    };

    const updateProduct = (req, res) => {
        const productId = parseInt(req.body.product_id);
        const customer_name = req.body.customer_name;
        const customer_number = parseInt(req.body.customer_number);
        const quantity = parseInt(req.body.product_quantity);

        ProductService.updateProduct(productId, customer_name, customer_number, quantity).then(
            (productBuy) => {
                if(!productBuy){
                    res.status(500).send("Internal Server Error. Please try again later");

                }else {
                    res.status(201).send(productBuy);
                }
            }
        );



    }



    return{
        getAllProducts: getAllProducts,
        getAllProductsBought: getAllProductsBought,
        createProduct: createProduct,
        deleteProduct: deleteProduct,
        buyProduct: buyProduct,
        updateProduct: updateProduct
    }

}

export default ProductController();