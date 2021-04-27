fName = prompt("What's your first name?");
lName = prompt("What's your last name?");
age = prompt("What's your age?");
height = prompt("What's your height?");
petName = prompt("What's your pet name?");

if (fName[0] == lName[0] && age > 20 && age < 30 && height > 170 && petName[petName.length-1] == "y"){
    console.log("The secret message is: you won")
}

