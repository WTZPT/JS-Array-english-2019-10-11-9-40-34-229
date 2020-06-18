// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof(a))
console.log(Array.isArray(a))
console.log(typeof(b))
console.log(Array.isArray(b))

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < a.length; i++) {
    a[i] = a[i]*2;
}
console.log(a)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '))
console.log(colors.join('+'))
console.log(colors.join())

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var i = 0 ; i < a.length; i++) {
    for(var j = i + 1; j < a.length; j++) {
        if(a[i] < a[j]) {
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }
}
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var map = new Map();
for(var i = 0 ; i < a.length;  i++){
    if(!map.has(a[i])){
        map.set(a[i],1);
    }else {
        var value = map.get(a[i]);
        map.set(a[i],value+1);
    }
}
var ele,eleValue;
eleValue = 0;
for(var [key,value] of map) {   
    if(value > eleValue){
        eleValue = value;
        ele = key;
    }
}
console.log(ele);