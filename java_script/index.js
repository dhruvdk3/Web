function createRectangle(l,b){
    let rectangle = {
        length : l,
        breadth : b,
        draw(){
            console.log("draw rectangle");
        }
    };
    return rectangle;
}


let x = createRectangle(1,2);
console.log(x.length);

function Rectangle(l,b){
    this.length = l;
    this.breadth = b;
    this.draw = function(){
        console.log("Drawing");
    }
}

let y = new Rectangle(3,5);
console.log(y.length);