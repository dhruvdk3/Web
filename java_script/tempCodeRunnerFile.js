date = new Date(2002, 4, 30, 7);
date.setFullYear(2031);
console.log(date)

let l = [1,3,4,5, 5];
l.push(6);
l.unshift(0);
l.splice(2,0,2);
console.log(l);
console.log(l.indexOf(1,5));
console.log(5 in l);

let details = [
    {Name: "Dhruv", age:22},
    {Name: "hehe", age:25},
    {Name: "hehe2", age:27},
];

