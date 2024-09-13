function createRectangle(l,b){
    return {
        length : l,
        breadth : b,
        draw(){
            console.log("draw rectangle");
        }
    };
}


let x = createRectangle(1,2);
x.colour = "red";
console.log(x.colour)
console.log(x);

function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log("Drawing");
    }
}

let y = new Rectangle(3,5);
y.colour = "red";
// console.log(y);
// console.log(y.colour)
console.log(y.constructor)

let rectangle1 = new Function('l', 'b', 
    `this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log("Drawing");
    }`
);

let rect = new rectangle1(2, 4);
console.log(rect.length);
console.log(rect.breadth);