let fare = 0; 

function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance < 400) {
    return 'This one is on me!'
  } else if (distance > 2000 && distance < 2500) {
    //newFare = fare + 30; 
    return 'I will gladly take your thirty bucks.'
  } else if (distance => 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(location) {
  return location === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(responseTip){
  // Write your code here!
  switch (responseTip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }

}