const moment = require("moment");
const chalk = require("chalk");



console.log("It is " + chalk.blue(moment().format("LLLL"))+ ".");
console.log("It is the " + chalk.magenta(moment().dayOfYear()+ "th") + " day of the year");

console.log("It is " + chalk.cyan(moment().diff(moment().startOf("day"),"seconds"))+ " seconds into the day");
console.log("It " + chalk.green(isTrue(moment().isDST())) + " during Daylight Savings Time");
  console.log("It " + chalk.red(isTrue(moment().isLeapYear())) + " a leap year");

function isTrue (boolValue){
   if (boolValue){
      return "is"
   } else
       return "is not"
}
