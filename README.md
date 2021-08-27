# Pizza Parlor

#### _A website that will allow a user to order a pizza_

#### By Erica Marroquin

## Technologies Used

* HTML
* CSS
* Markdown
* JavaScript

## Description

On this website, the user will have a choice of pizza size and toppings and will be given a cost depending on those choices.

## Setup/Installation Requirements

* Clone repository to your Desktop using the `git clone` command
* Navigate to the directory via the command prompt using the `cd` command
* Enter the project directory and enter the `code .` command to open all project files in VS Code
  * Warning - in order for `code .` to work, you must install `code` command in PATH
    * Open VS Code
    * Click on View > Command Palette
    * Type in "shell command"
    * Click on "__Shell Command__: Install `code` command in PATH"

_OR_

* Clone repository to desktop using `git clone` command
* Navigate to project directory using your machines file manager
* Open webpage in browser by double-clicking on each index file


## Known Bugs

* No known issues

## License

[MIT License](https://opensource.org/licenses/MIT)

Thank you to  [Epicodus](https://www.epicodus.com/) lesson "Text Editor: Visual Studio Code" for the directions on installing `code` command in PATH. 

## Contact Information

Erica Marroquin | [Email](mailto:ericamarroquin03@gmail.com) | [LinkedIn](https://www.linkedin.com/in/erica-marroquin/)

## Specs

```javascript
Describe: Pizza()
Test: "Should create a Pizza object."
Code: let pizza = new Pizza();
pizza;
Expected Output: Pizza {size:"small", toppings:{...}}

Describe: Pizza.prototype.totalCost();
Test: "Should return base cost $5."
Code: pizza.totalCost());
Expected Output: 5

Test: "Should return base cost plus $1 for medium."
Code: pizza.totalCost("medium");
Expected Output: 6

Test: "Should return base cost plus $2 for large."
Code: pizza.totalCost("large");
Expected Output: 7

Test: "Should return base cost plus $3 for XL."
Code: pizza.totalCost("XL");
Expected Output: 8

Test: "Should return each chosen topping."
Code:
let toppings = ["cheese","pineapple"]
pizza.totalCost("medium",toppings);
Expected Output:
cheese
pineapple

Test: "Should return a chosen topping and full list of topping choices for each chosen topping."
Code:
let toppings = ["cheese","pineapple"]
pizza.totalCost("medium",toppings);
Expected Output:
cheese
cheese
pepperoni
pineapple
chicken
ham
peppers
pineapple
cheese
pepperoni
pineapple
chicken
ham
peppers

Test: "Should return 'Match!' when chosen topping equals a topping value in the list of topping choices."
Code:
let toppings = ["cheese","pineapple"]
pizza.totalCost("medium",toppings);
Expected Output:
cheese
cheese
Match!
pepperoni
pineapple
chicken
ham
peppers
pineapple
cheese
pepperoni
pineapple
Match!
chicken
ham
peppers

Test: "Should return price value of topping choice when 'Match' is found."
Code:
let toppings = ["cheese","pineapple"]
pizza.totalCost("medium",toppings);
Expected Output:
cheese
cheese
0
pepperoni
pineapple
chicken
ham
peppers
pineapple
cheese
pepperoni
pineapple
0.5
chicken
ham
peppers

Test: "Should return total cost of small size pizza with cheese and pineapple."
let toppings = ["cheese","pineapple"]
pizza.totalCost("small",toppings);
Expected Output: 5.5

Test: "Should return total cost of medium size pizza with cheese and pineapple."
let toppings = ["cheese","pineapple"]
pizza.totalCost("medium",toppings);
Expected Output: 6.5

Test: "Should return total cost of large size pizza with cheese and pineapple."
let toppings = ["cheese","pineapple"]
pizza.totalCost("large",toppings);
Expected Output: 7.5

Test: "Should return total cost of XL size pizza with cheese and pineapple."
let toppings = ["cheese","pineapple"]
pizza.totalCost("XL",toppings);
Expected Output: 8.5

Test: "Should return total cost of small size pizza with cheese, pineapple, and chicken."
let toppings = ["cheese","pineapple", "chicken"]
pizza.totalCost("small",toppings);
Expected Output: 6.5
```