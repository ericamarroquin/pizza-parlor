function Pizza() {
  this.size = "small";
  this.toppings = [];
}

const toppingsMenu = {
  cheese: 0,
  pepperoni: 0.5,
  pineapple: 0.5,
  chicken: 1,
  ham: 1,
  peppers: 0.25,
}

Pizza.prototype.totalCost = function(size, chosenToppings) {
  let cost = 5;
  const toppingKeys = Object.keys(toppingsMenu);
  const toppingValues = Object.values(toppingsMenu);
  for (let i = 0; i < chosenToppings.length; i++) {
    console.log(chosenToppings[i]);
    for (j = 0; j < toppingKeys.length; j++) {
      console.log(toppingKeys[j]);
      if (chosenToppings[i] === toppingKeys[j]) {
        console.log("Match!");
        cost += toppingValues[j];
      }
    }
  }
  return cost;
}

  if (size === "medium") {
    cost += 1
  } else if (size === "large") {
    cost += 2
  } else if (size === "XL") {
    cost += 3
  }