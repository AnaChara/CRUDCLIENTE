// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi('sk_test_8Pa0r2dmo7bzDjevLBM5P2OPrvNxVQkAYKBw9OZ3XG');
// c) Crea una factura
async function createProduct(Product){
    const facturapiProduct= {
        description: Product.description,
        product_key:"50202306",
        price: Product.price
    };
    return await facturapi.products.create(facturapiProduct);
};

async function createCustomer(Customer) {
    const facturapiCustomer = {
        legal_name: Customer.legal_name,
        tax_id: Customer.tax_id,
        tax_system: Customer.tax_system,
        email: Customer.email,
        address: {
            zip: Customer.address.zip
        }
    };
    return await facturapi.customers.create(facturapiCustomer);
};

async function deleteProduct(id){
    return await facturapi.products.del(id);
};

async function deleteCustomer(id){
    return await facturapi.customers.del(id);
};

async function updateProduct(id, updatedProduct) {
    const facturapiProduct = {
        description: updatedProduct.description,
        price: updatedProduct.price,
    };
        return await facturapi.products.update(id, facturapiProduct);
};
async function updateCustomer(id, updatedCustomerData) {
    const facturapiCustomer = {
        legal_name: updatedCustomerData.legal_name,
        email: updatedCustomerData.email,
        address: {
            zip: updatedCustomerData.address.zip
        },
    };
        return await facturapi.customers.update(id, facturapiCustomer);
}



module.exports = {createProduct,createCustomer, deleteProduct, deleteCustomer,updateProduct,updateCustomer};