// https://github.com/yesabhuiya1001/JS-assignment1

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result)



function hotelCost(days){
    var cost = 0;
    if(days<=10){
        cost = days * 100;
    }
    else if(days>10){
        cost = days * 80;
    }
    return cost;
}
var totalCost = hotelCost(11);
console.log(totalCost)

