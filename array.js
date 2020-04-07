// 1.Creating an array.

var name = ["Deepesh","Chitrasen","Abhinav"];

for(var i=0; i<name.length; i++){
    console.log(name[i]);
}
console.log(name.length+'\n');

// 2.push() add element at the end of the array and also update the length of the array.

console.log(name.push("Arvinder")); 
for(var i=0; i<name.length; i++){
    console.log(name[i]+'\n')
}

// 3.unshift() add element at the begining of the array. 

name.unshift("Rajat"); 

for(var i=0; i<name.length; i++){
    console.log(name[i])
}
console.log(name.length+'\n');

// 4.delete is used to remove element from specific position. 

delete name[0];  
for(var i=0; i<name.length; i++){
    console.log(name[i])
}
console.log(name.length+'\n');

// 5.shift() remove the first element of an array and also return that element.

console.log(name.shift());  
for(var i=0; i<name.length; i++){
     console.log(name[i])
}
console.log(name.length+'\n');

// 6.pop() remove the last element of an array and also return that element.

console.log(name.pop());  
for(var i=0; i<name.length; i++){
     console.log(name[i])
}
console.log(name.length+'\n');

// 7.Concat() used to join two array.
 
var item = ['Red','Blue','Green'];
console.log(name.concat(item)+'\n');

// 8.slice() used to get element from specifc postion in an array.

console.log(name.slice(1,4));

// 9.reverse() is used to reverse the position of given array.

var color = ['Red','Blue','Green','Orange','Pink'];
console.log(color.reverse()+'\n');

// 10.Creating Dictionary in JavaScript with key and value.

var fosterBoys = {name:"Deepesh",No:1}; 
console.log(fosterBoys+'\n');