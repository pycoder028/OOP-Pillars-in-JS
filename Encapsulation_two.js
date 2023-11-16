/* 
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===
 * Title: Encapsulation
 * Description: Encapsulation is first pillar of Object Oriented Programming...
 * Author: Forhad Hossain ( callbackMind )
 * Date: 16th Nov 2023
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===
*/

// This is the second example of Encapsulation...

class Player{
    // define private property
    #name;
    #birthDay;
    #noOfMonths;
    #monthlySalary;

    constructor(name,birthDay, noOfMonths, monthlySalary){
        // now accessing parameter's
        this.#name = name;
        this.#birthDay = birthDay;
        this.#noOfMonths = noOfMonths;
        this.#monthlySalary = monthlySalary;
    }

    calculate_age(){
        const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    getSalary(){
        return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
    }

    printName(){
        console.log("\n");
        console.log(this.#name);
    }
}

// object's - creation
const shakib = new Player("Shakib al hasan","1987-03-14",200000, 12);
const tamim = new Player("Tamim iqbal khan","1988-03-10",150000, 12);

// show the output for object - one
shakib.printName();
console.log(shakib.calculate_age());
console.log(shakib.getSalary());

// show the output for object - two
tamim.printName();
console.log(tamim.calculate_age());
console.log(tamim.getSalary());

// now paly with object :)