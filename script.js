const email = prompt("Enter the Email Address");

const emailLen = email.length;
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");

const lastIndex = emailLen-1;
if(emailLen < 11 || lastIndex-dotIndex < 2 || lastIndex -dotIndex >3 || dotIndex - atIndex < 3){
    console.log("Invelid Email");

}
else{
    console.log("It's Valid Email");
}