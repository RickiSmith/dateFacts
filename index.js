const moment = require("moment");
const chalk = require("chalk");



console.log("It is " + chalk.blue(moment().format("LLLL"))+ ".");
console.log("It is the " + chalk.magenta(moment().dayOfYear()+ "th") + " day of the year");
console.log("It" + isTrue(moment().isDST) + "during Daylight Savings Time")

function isTrue (boolValue){
   if (boolValue){
      return "is"
   } else
       return "is not"
}
