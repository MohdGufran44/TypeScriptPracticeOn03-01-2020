interface Box{
    height: number;
    width:number;
}

interface Box {
    scale: number;
    //width: string; Error Non-function members of the interfaces should be unique or same type.
}

let ox: Box = {height: 5, width: 6, scale: 10};
console.log(ox.height);
/*
interface Cloner {
    clone(animal: Animal):Animal;
}

interface Cloner {
    clone(animal:Sheep):Sheep;
}

interface Cloner {
    clone(animal: Dog):dog;
    clone(animal:Cat):Cat;

}
*/

// all above declaration we can declare in one interface like below
interface Cloner {
    clone(animal: Dog):dog;
    clone(animal:Cat):Cat;
    clone(animal:Sheep):Sheep;
    clone(animal: Animal):Animal;
}