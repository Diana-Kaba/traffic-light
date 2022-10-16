"use strict";
function trafficLight(name) {
  let color = "red";
  name = 1;
  let examination = function () {
    if (color == "red") {
      color = "green";
      name = 2;
    } else {
      color = "red";
    }
    return color + name;
  };
  return examination;
}

let red = trafficLight();
console.log(red());
let green = trafficLight();
console.log(green());
