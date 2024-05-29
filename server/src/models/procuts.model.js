const addProduct = "INSERT INTO PRODUCTS ( MERCHANT_ID, NAME, DESCRIPTION, CATEGORY, PRICE, OLD_PRICE, STOCK, OLD_STOCK, " + 
                   "RATING, PRODUCT_STATUS, DISCOUNT_STATUS, IMAGE ) VALUES ( $1, $2, $3, $4, $5, 0, $6, 0, 0, 'NEW', 'NA', $7 )";

const updateProduct = "UPDATE PRODUCTS SET OLD_PRICE = $1, PRICE = $2, OLD_STOCK = $3, STOCK = $4 " + 
                      " WHERE PRODUCT_ID = $5 AND MERCHANT_ID = $6";

const deleteProduct = "DELETE FROM PRODUCTS WHERE PRODUCT_ID = $1 AND MERCHANT_ID = $2";

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
}