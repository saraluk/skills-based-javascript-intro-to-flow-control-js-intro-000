function basicTeenager(age) {
  if (age>= 13 && age <= 19){
    return "You are a teenager!";
}
}


function teenager(age) {
if (age>= 13 && age <= 19){
  return "You are a teenager!"
} else {
  return "You are not a teenager"
}
}


function ageChecker(age) {
  var result = ''
  if(age>= 13 && age <= 19){
    result = "You are a teenager!"
  } else if(age<=12){
    result = "You are a kid"
  } else {
    result = "You are a grownup"
  }

  return result;
}

function ternaryTeenager(age) {
  return age>= 13 && age <= 19 ? "You are a teenager": "You are not a teenager"
}

function switchAge(age) {
switch (age) {
  case 13:
  return "You are a teenager"
    break;
  case 14:
  return "You are a teenager"
    break;
  case 15:
  return "You are a teenager"
    break;
  case 16:
  return "You are a teenager"
    break;
  case 17:
  return "You are a teenager"
    break;
  case 18:
  return "You are a teenager"
    break;
  case 19:
  return "You are a teenager"
    break;
  default:
  return "You have an age"
}
}
