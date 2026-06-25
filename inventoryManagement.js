// Write your code here
const products=['laptop','phone','Headphone','Monitor'];

function logFirstProduct(productName){
   console.log(products[0]);
}

console.log(logFirstProduct());

function addNewProduct(item){
  products.push(item);
};

addNewProduct('watch');

console.log(products);

function updateProduct(index,newName){
   products[index]=newName;
}
updateProduct(0,'charger');

console.log(products);

function removeLastProduct(){
  products.pop();
}

removeLastProduct();
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
