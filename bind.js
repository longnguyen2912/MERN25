//Bind - is a function extension present similar to call and apply but can be used in case of delayed execution
// So if we need to bind any object with any event listener like click, hover so that it shows the assigned values
// in object (scope and context), we will be able to use Bind


var User = {
    FName:"Eric", Location:"Somewhere in Australia", Age:20,
    printInfo: function(){
        console.log(this); //scope is the user object as printinfo execute over it
        console.log(this.FName);
        setTimeout(function() {
            console.log(this)
            console.log("Inner", this.FName)
        }.bind(this), 2000);
}
}

User.printInfo()