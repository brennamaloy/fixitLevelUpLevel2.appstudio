
/*define the variables */
let userName = prompt("What is your name?")
let stateName = prompt ("What state are you from?")
let currentTemp = prompt ("What is the current temperature?")

stateName = stateName.toUpperCase()
uppercaseFirstLetter = userName.charAt(0).toUpperCase() + userName.slice(1);
/*array statement*/
let message = ["wear a warm coat, hat scarf and gloves.", "wear a warm coat but you won't need a hat scarf or gloves." , "wear a less heavy coat." , "wear a light jacket and smile!"]


/*if else statement */
if (stateName == 'NE' && currentTemp <32) {
  NSB.MsgBox(`Hi ${userName}, ${message[0]}`) 
} else if (stateName == 'NE' && currentTemp >= 32 && currentTemp <= 50) {
  NSB.MsgBox(`Hi ${userName}, ${message[1]}`) 
} else if (stateName == 'FL' && currentTemp >= 32 && currentTemp <= 50) {
  NSB.MsgBox(`Hi ${userName}, ${message[2]}`)
} else if (stateName == 'FL' && currentTemp >= 50 && currentTemp <= 70) {
  NSB.MsgBox(`Hi ${userName}, ${messae[3]}`)
} else {
  NSB.MsgBox(`Hi ${userName}, please enter a valid response`)
} 
