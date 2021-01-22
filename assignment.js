// https://github.com/yesabhuiya1001/JS-assignment1


// Kilometer to Meter.
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result)


// find out the cost of a hotel when first ten days cost 100/day and after ten days the cost will reduce 20%: Copied the structure from practice module.
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

// find the leargest string from an array: Copied the structure from internet.
var names = ["yesa", "musa", "ranajoy"]
function findLongestWord(names) {
    var longest = [0];

  for(var i = 0; i < names.length; i++) {
     if(names[i].length > longest.length) {
       longest = names[i];
        } 
     }
  return longest;
}
var largest = findLongestWord(names);
console.log(largest)