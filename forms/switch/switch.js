
/*define the variables */ 
 userName = prompt("What is your name?")
 stateName = prompt ("What state are you from?")
currentTemp = prompt ("What is the current temperature?")

stateName = stateName.toUpperCase()
FirstLetter = userName.charAt(0).toUpperCase() + userName.slice(1);

/*array statement*/
message = ["wear a warm coat, hat scarf and gloves.", "wear a warm coat but you won't need a hat scarf or gloves." , "wear a less heavy coat." , "wear a light jacket and smile!"]

/*switch statement*/ 
switch(true) {
case (stateName == "NE" && currentTemp < 32):
  NSB.MsgBox(`Hi ${userName}, ${message[0]}`)
  break
case (stateName = "NE" && currentTemp >=32 && currentTemp <=50):
  NSB.MsgBox(`Hi ${userName}, ${message[1]}`)
  break
case (stateName = "FL" && currentTemp >=32 && currentTemp <=50):
  NSB.MsgBox(`Hi ${userName}, ${message[2]}`)
  break
case (stateName = "FL" && currentTemp >=50 && currentTemp <=70):
  NSB.MsgBox(`Hi ${userName}, ${message[3]}`)
  break
default:
  NSB.MsgBox(`Hello ${userName}, please enter a valid response.`)
}
