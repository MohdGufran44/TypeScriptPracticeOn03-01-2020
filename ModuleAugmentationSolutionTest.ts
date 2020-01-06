import {Product} from "./ModuleAugmentationSolution";

declare module "./ModuleAugmentationSolution"{
    interface Product {
        productCost:number;
        trim(input:number);
    }
}
Product.prototype.trim=(input:number)=>`trimming.......... ${input}`

let product = new Product();
product.productName="Juicer";
product.getPrice("Juicer");
console.log(product.productName);
console.log(product.productCost);
console.log(product.trim(1));
