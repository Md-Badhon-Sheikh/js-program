// let n = 10;
// let a = 0; 
// let b = 1; 

// console.log(a); 

// for (let i = 1; i < n; i++) {
//     console.log(b); 
//     let next = a + b; 
//     a = b; 
//     b = next;
// }


// let n = 5;
// let a = 0;
// let b = 1;

// console.log(a);
// for (let i = 1; i < 5; i++) {
//     console.log(b);
//     let next = a + b;
//     a = b;
//     b = next;
// }

let a = 0, b = 1, n = 5;
console.log(a);

for(let i = 1; i<5; i++){
    console.log(b);
    let next = a+b;
    a = b;
    b=next;
}