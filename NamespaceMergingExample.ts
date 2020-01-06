namespace Animal{
    let haveMuscles = true;
    export function animalHaveMuscles() {
        return haveMuscles;
    }
}
console.log(Animal.animalHaveMuscles());

namespace Animal{
    export function doAnimalsHaveMuscles() {
        //return haveMuscles; // can't find name haveMuscles Because haveMuscles is not exported
    }
}
