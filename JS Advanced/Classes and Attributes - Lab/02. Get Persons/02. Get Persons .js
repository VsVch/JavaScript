function solve() {

    class Person {
        constructor (firstName, lastName, age, email) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email
        }
        toString () {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person1 = new Person('SoftUni');
    let person2 = new Person('Stephan', 'Johnson', 25);
    let person3 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');

let table = [];
table.push(person);
table.push(person1);
table.push(person2);
table.push(person3);

return table;
}
