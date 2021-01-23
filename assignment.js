
//Problem One
// kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; //1 kilometer = 1000 meter.
    return meter;
}






// Problem Two

// budgetCalculator

function budgetCalculator(watch, phone, laptop) {  
    var totalWatch = watch * 50; // 1 Watch buy need 50 taka.
    var totalPhone = phone * 100; // 1 Phone buy need 100 taka.
    var totalLaptop = laptop * 500; // 1 Laptop buy need 500 taka.

    var totalProduct = totalWatch + totalPhone + totalLaptop;
    return totalProduct;
}




// Problem Three

// hotelCost


function hotelCost( days ){
    var cost = 0;
    if (days < 0){
        cost = "Input a valid Number";
    }
    else if (days <= 10){
        cost = days * 100;
    }
    else if (days <= 20){
        firstPart = 10 * 100;
        remaining = days - 10;
        secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        firstPart = 10 * 100;
        secondPart = 10 * 80;
        remaining = days - 20;
        thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    
    return cost;
}







//Problem Four

// megaFriend

function  megaFriend(name) {
    var friendName = name[0]; // Array 1st element 0.

    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if (currentName.length > friendName.length) {
            friendName = currentName;
            
        }
    }
    return friendName;

}








