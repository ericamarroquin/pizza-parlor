//Business Logic
// function MultiplePizzas() {
//   this.pizzas = {};
//   this.pizzaId = 0;
// }

// MultiplePizzas.prototype.assignId = function() {
//   this.pizzaId += 1;
//   return this.pizzaId;
// }

// MultiplePizzas.prototype.addPizza = function(pizza) {
//   pizza.id = this.assignId();
//   this.pizzas[pizza.id] = pizza;
// }

// MultiplePizzas.prototype.findPizza = function(id) {
//   if (this.pizzas[id] != undefined) {
//     return this.pizzas[id];
//   }
//   return false;
// }

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

Pizza.prototype.totalCost = function() {
  let cost = 5;
  const toppingKeys = Object.keys(toppingsMenu);
  const toppingValues = Object.values(toppingsMenu);
  for (let i = 0; i < this.toppings.length; i++) {
    for (j = 0; j < toppingKeys.length; j++) {
      if (this.toppings[i] === toppingKeys[j]) {
        cost += toppingValues[j];
      }
    }
  }
  if (this.size === "medium") {
    cost += 1
  } else if (this.size === "large") {
    cost += 2
  } else if (this.size === "XL") {
    cost += 3
  }
  return cost;
}

//UI Logic

// let multiplePizzas = new MultiplePizzas();

// function displayPizzaDetails(ordersToDisplay) {
//   let showPizzaSize = $("#pizza-size");
//   let showPizzaToppings = $("#pizza-toppings");
//   let showPizzaCost = $("#pizza-cost");
//   Object.keys(ordersToDisplay.pizzas).forEach(function(key) {
//     const pizza = ordersToDisplay.findPizza(key);
//     showPizzaSize.html(pizza.size);
//     showPizzaToppings.html(pizza.toppings);
//     showPizzaCost.html(pizza.totalCost());
//   })
// }

$(document).ready(function() {
  $("form#chooseToppings").submit(function(event) {
    event.preventDefault();
    const newPizza = new Pizza();
    newPizza.size = $("#size").val();
    
    let toppingValues = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingValues.push($(this).val());
    })

    newPizza.toppings = toppingValues;
    const pizzaCost = newPizza.totalCost();
    $("#pizza-size").text(newPizza.size);
    $("#pizza-toppings").text(newPizza.toppings.join(", "));
    $("#pizza-cost").text(pizzaCost);
    $(".show-order").show();
  })
})