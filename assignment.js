// https://github.com/yesabhuiya1001/JS-assignment1


// Kilometer to Meter.
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(5);
console.log(result)


// Budget calculator for Watch, Mobile and Laptop: Total code done by myself.
var perWatch = 50;
var perMobile = 100;
var perLaptop = 500;
function budgetCaculator(watch, mobile, laptop){
  var budget = 0;
  if(watch, mobile, laptop >= 0){
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    budget = watchCost + mobileCost + laptopCost;
  }
  return budget;
}
var totalBudget = budgetCaculator(0,0,2);
console.log(totalBudget)


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
function megaFriend(names) {
    var longest = [0];

  for(var i = 0; i < names.length; i++) {
     if(names[i].length > longest.length) {
       longest = names[i];
        } 
     }
  return longest;
}
var largest = megaFriend(names);
console.log(largest)