const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

// console.log(button);
// console.log(repairList);

const createVehicle = function (type, numWheels, color) {
  const vehicle = {};
  vehicle.type = type;
  vehicle.numWheels = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "white");
const skateboard = createVehicle("skateboard", 3, "black");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHtml = "";
  const vehicleRepairList = myVehicles.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });

  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span> ${vehicle.type} </span> needs some 💜`;
    repairList.append(li);
  }
});
