"use strict";
function trafficLight(name) {
  let color = "green";
  let examination = function () {
    if (color == "red") {
      color = "green";
    } else if (color == "green") {
      color = "yellow";
    } else {
      color = "red";
    }
    return name + ":" + color;
  };
  return examination;
}

let trafficLight1 = trafficLight(1);
console.log(trafficLight1());
console.log(trafficLight1());
let trafficLight2 = trafficLight(2);
console.log(trafficLight2());
console.log(trafficLight1());
console.log(trafficLight2());
let trafficLight3 = trafficLight(3);
console.log(trafficLight3());
console.log(trafficLight2());
console.log(trafficLight1());