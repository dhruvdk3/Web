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

let a = {value:10};
let b = a;
a.value++;
console.log(a.value);
console.log(b.value);

if("lengthi" in rectangle1){
    console.log(1);
}
let z = Object.assign({}, x);
// for(let key in x){
//     z[key] = x[key];
// }

z.length++;
console.log(z);