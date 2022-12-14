function main() {

    class Figure {

        constructor(units = `cm`) {

            this.units = units;

        }

        changeUnits(unitType) {

            this.units = unitType;
        }


        unitType(value) {

            if (this.units == `m`) {

                return value / 10;
            }
            if (this.units == `mm`) {

                return value * 10;
            }

            return value;
        }

        toString() {

            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {

        constructor(radius, units) {
            super(units);

            this.radius = radius;
        }

        get rad (){

            return this.unitType(this.radius);
        }
        
        get area() {

            return Math.PI * this.rad ** 2;
        }


        toString() {

            return super.toString() + ` Area: ${this.area} - radius: ${this.rad}`
        }
    }

    class Rectangle extends Figure {

        constructor(width, height, units) {
            super(units)

            this.width = width;
            this.height = height;

        }

        get propWidth(){

            return this.unitType(this.width);
        }

        get propHeight(){

            return this.unitType(this.height);
        }

        get area (){

            return this.propHeight * this.propWidth;
        }


        toString() {

            return super.toString() + ` Area: ${this.area} - width: ${this.propWidth}, height: ${this.propHeight}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let asd = main();
let c = new asd.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new asd.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // 