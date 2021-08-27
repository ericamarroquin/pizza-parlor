function Pizza() {
  this.size = "small";
  this.toppings = {};
}

const toppings = {
  cheese: 0,
  pepperoni: 0.5,
  pineapple: 0.5,
  chicken: 1,
  ham: 1,
  peppers: 0.25,
}

Pizza.prototype.totalCost = function() {

}