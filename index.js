function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return ('This one is on me!');
} 
// This else if statement got the 3rd test passing to charge $30 over 200 feet.
  else if(feet >= 400 && feet <= 2000){
    return ('That will be twenty bucks.');
} 
// This else if statement got the 4th test passing to not allow rides over 2500 feet.
  else if(feet > 2000 && feet <= 2499){
    return ('I will gladly take your thirty bucks.');
}
  else if(feet > 2500){
    return ('No can do.');
  }
}

// to charge 30 bucks, tried: 
// >= 2000
// > 401
// > 2000
// >= 400 && > 2000
// >= 400 && 2001
// feet ('That will be twenty bucks.') && 2001)
// feet !400 && >2000
// feet < 2000 && feet <=2500

function ternaryCheckCity(city){
  // Write your code here!
  return city === `NYC` ? `Ok, sounds good.` : `No go.`
}

// Ternary conditional reads as return "ok sounds good" if the city parameter strictly equals NYC, otherwise return "No go."

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return `Thank you so much.`
    case 'not as generous':
      return `Thank you.`
    default:
      return `Bye.`
  }
}

// The switch conditional is saying that if the tip parameter is "generous", return "thank you so much."
// If the tip parameter is "not as generous," return "thank you."
// The the tip parameter as anything else, by default, it will return "bye."