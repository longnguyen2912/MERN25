
var User = {
    FName:"Eric", Location:"Somewhere in Australia", Age:20,
    printInfo: function(){
        console.log(this); //scope is the user object as printinfo execute over it
        console.log(this.FName);
        setTimeout(function() {
            console.log(this)
            console.log("Inner", this.FName)
        }.call(this), 2000);
}
}

User.printInfo()