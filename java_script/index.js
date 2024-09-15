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
let z = Object.assign({hehe:4}, x);
// let z = {...x};
z.length++;
console.log(z);

let date = new Date();
date = new Date("May 2002 18:16");
date = new Date(2002, 4, 30, 7);
date.setFullYear(2031);
console.log(date)

let l = [1,3,4,5];
console.log(l);
l.push(6);
l.unshift(0);
l.splice(2,0,2);
console.log(l);

l.pop();
l.shift();
l.splice(1,1);
console.log(l);

console.log(l.indexOf(1,5));
console.log(5 in l);

let details = [
    {Name: "Dhruv", age:22},
    {Name: "hehe", age:25},
    {Name: "hehe2", age:27},
];


let detail = details.find(detail=>detail.Name == "Dhruv");

console.log(detail);

x1 = [1,2,3];
x2 = [4,5,6];
console.log(x1.concat(x2).slice(-5));
console.log([...x1,...x2])
l.forEach(i=>console.log(i))
console.log(x1.join(" hehe ").split(" "));
x = [4,8,1,9,3,-3,-9,-1];
console.log(x.sort());
console.log(x.filter(i=>i<=0).map(i=>"hehe"+i));
a = x.filter(i=>i<=0);
b = a.map(a=>{i: a});
console.log(b);