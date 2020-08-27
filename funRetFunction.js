/** Function returning another function. */

function fullName(name){
    return function print(surname){
        return "Hii "+ name + "  " + surname ; 
    }
}
var msg = fullName("Deepesh");  
console.log(msg("Soni"));