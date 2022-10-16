"use strict";
function trafficLight(name) {
  let color = "green";
  name = "stop";
  let examination = function () {
    if (color == "red") {
      color = "green";
      name = "go";
    } else if (color == "green") {
      color = "yellow";
      name = "ready";
    } else {
      color = "red";
    }
    return color + ": " + name;
  };
  return examination;
}

let red = trafficLight();
console.log(red("stop"));
let green = trafficLight();
console.log(green("go"));
let yellow = trafficLight();
console.log(yellow("ready"));