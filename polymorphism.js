/* 
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===
 * Title: Polymorphism
 * Description: Polymorphism is fourth pillar of Object Oriented Programming...
 * Author: Forhad Hossain ( callbackMind )
 * Date: 16th Nov 2023
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===
*/

class Player{
    #name;
    #age;

    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }

    // getter
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }

    getPlayerDetails(){
        return `${this.#name} is ${this.#age} year's old`;
    }
}

class Cricketer extends Player{
    #centuries;

    constructor(name,age,centuries){
        super(name,age);
        this.#centuries = centuries;
    }

    // method overridding (runtime polymorphism)
    getPlayerDetails(){
        return `${this.getName()} এর বয়স ${this.getAge()} বছর`;
    }
}

class Footballer extends Player{
    #goals;

    constructor(name,age,goals){
        super(name,age);
        this.#goals = goals;
    }
}

const shakib = new Cricketer("Shakib al hasan", 40, 16);
const kaka = new Footballer("Recardo kaka",50,100);

console.log(shakib.getPlayerDetails());
console.log(kaka.getPlayerDetails());