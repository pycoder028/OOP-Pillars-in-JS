/* 
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===
 * Title: Abstraction
 * Description: Abstraction is third pillar of Object Oriented Programming...
 * Author: Forhad Hossain ( callbackMind )
 * Date: 16th Nov 2023
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===
*/

class BtterArray{
    #items;

    constructor(){
        this.#items = [];
    }

    getItem(){
        return [...this.#items];
    }

    addItem(item){
        this.#items.push(item);
    }

    removeItem(itemToDelete){
        this.#items = this.#items.filter((item) => item !== itemToDelete);
    }

    modifyItem(itemToChange, newValue){
        const index = this.#items.indexOf(itemToChange);
        if(index !== -1){
            this.#items[index] = newValue;
        }
    }
}

// ref - 1
/* const array = new BtterArray();
array.addItem("I love Bangladesh");
console.log(array.getItem()); */

// ref - 2
/* const array = new BtterArray();
array.addItem("I love Bangladesh");
array.addItem("We love JavaScript");
console.log(array.getItem());

array.removeItem("I love Bangladesh");
console.log(array.getItem()); */

// ref - 3
const array = new BtterArray();
array.addItem("I love Python");
array.addItem("I love JavaScript");
console.log(array.getItem());

array.modifyItem("I love Python", "I love PHP");
console.log(array.getItem());