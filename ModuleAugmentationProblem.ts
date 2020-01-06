class Product {
    productName:string;
}

interface Product {
    quality: string;
    trim(input:number);
}

let product=new Product();
product.productName="Trimmer";
product.quality="Good";
console.log(product);
//product.trim(1);

    //here we will get error trim is not a function because trim doesn't have implementation
    //to solve this problem we add implementation of trim() to the Product prototype


console.log(Product.prototype.trim = (item) => console.log("Trimming.........."));

product.trim(1);






