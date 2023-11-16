/* 
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===
 * Title: Encapsulation
 * Description: Encapsulation is first pillar of Object Oriented Programming...
 * Author: Forhad Hossain ( callbackMind )
 * Date: 16th Nov 2023
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===
*/

// This is the first example of Encapsulation...
class Player{
    constructor(name, birthDay, monthSalary, noOfMonths){
        this.name = name;
        this.birthDay = birthDay;
        this.monthSalary = monthSalary;
        this.noOfMonths = noOfMonths;
    }

    calculate_age(){
        const diff_ms = Date.now() - new Date(this.birthDay).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    getSalary(){
        return (this.monthSalary * this.noOfMonths).toLocaleString();
    }
}

// object's - creation
const shakib = new Player("Shakib","1987-03-14",200000, 12);
const tamim = new Player("tamim","1988-03-10",150000, 11);

// show the output for object - one
console.log(shakib.calculate_age());
console.log(shakib.getSalary());

// show the output for object - two
console.log(tamim.calculate_age());
console.log(tamim.getSalary());

// now paly with object :)