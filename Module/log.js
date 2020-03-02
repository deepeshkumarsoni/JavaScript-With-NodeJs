function firstName()
{
    console.log("Deepesh");
}

function lastName()
{
    console.log("Soni");
}

function fullName(msg)
{
    console.log(msg);
    firstName();
    lastName();
}

//module.exports.firstName = firstName;
//module.exports.lastName = lastName;
module.exports = fullName;
