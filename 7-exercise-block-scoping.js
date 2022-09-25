var x,y;

function diff(x,y){
  if (x>y){
    let temp=x;
    x=y;
    y=temp;
  }
    return y-x;
}

console.log(diff(5,7));
console.log(diff(8,5));