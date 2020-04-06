// Creating an Switch Statement.

var sign = process.argv[2];
console.log('argv\n',process.argv);

switch(sign){
    case "tarus" : 
    console.log("Full of Energy");
    break;   

    case "virgo" :
    console.log("Full of Emotions");
    break;

    case "leo" :
    console.log("Full of Possitive Energy");
    break;
    
    default :
    console.log("Please Entered a Valid Sign");
    break;
}