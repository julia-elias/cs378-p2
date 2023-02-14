var foods = {};
var total =  0;
var count = 0;
// Default initial counts for the quantities and total
document.getElementById("mac-amount").innerHTML = 0;
document.getElementById("total").innerHTML = 0;
document.getElementById("enchilada-amount").innerHTML = 0;
document.getElementById("taco-amount").innerHTML = 0;
document.getElementById("pasta-amount").innerHTML = 0;

// Decrements total cost and quantity number for the ordered food item
function handleDecrement(key, food, cost) {
  // check to see if key and value are currently present in array
  if (key in foods && foods[key] !== 0) {
    foods[key] = foods[key] - 1;
    total -= cost;
    console.log("cost" + cost);
    console.log("food items" + foods[key]);
    document.getElementById(food+"-amount").innerHTML = foods[key];
    document.getElementById("total").innerHTML = total;

  }
}

// Increments total cost and quantity number for the ordered food item
function handleIncrement(key, food, cost) {
  if (key in foods) {
    console.log(foods[key]);
  }
  else {
    console.log(key);
    foods[key] = 0;
  }
  foods[key] = foods[key] + 1;
  console.log(foods[key])
  total += cost;
  document.getElementById(food+"-amount").innerHTML = foods[key];
  document.getElementById("total").innerHTML = total;
}


// Clears all the counts of food items and total cost
function handleClear() {
  const food_names = ["mac", "taco", "enchilada", "pasta"];
  const food_keys = ["mac & cheese", "tacos", "enchilada", "pasta"];
  
  // determine which foods are in the cart, and clear their quantities
  // and subtract their cost from the total
  for (i = 0; i < food_names.length; i++) {
    var cur_food = food_names[i];
    if (food_keys[i] in foods) {
      console.log("food cost " + document.getElementById(cur_food+"-cost").innerHTML);
      total -= (document.getElementById(cur_food+"-cost").innerHTML * foods[food_keys[i]]);
      document.getElementById("total").innerHTML = total;

      foods[food_keys[i]] = 0;
      document.getElementById(cur_food+"-amount").innerHTML = foods[food_keys[i]];
    }
  }
}

// Displays alert for the food that is ordered
function handleOrder() {
  var food_string = ""
  for (var key in foods) {
    if (foods[key] !== 0) {
      food_string = food_string + " " + foods[key] + " " + key 
      console.log(food_string)
    }
  }
  if (food_string.length === 0) {
    food_string = "No items in cart"
  } else {
    food_string = "Order placed! " + food_string
  }
  alert(food_string)
}
// Mac and cheese counts
const mac_minus = document.getElementById("mac-minus");
const mac_add = document.getElementById("mac-add");
mac_minus.addEventListener("click", function () {
  handleDecrement("mac & cheese", "mac",5);
});

mac_add.addEventListener("click", function () {
  handleIncrement("mac & cheese","mac", 5);
});


// Pasta counts
const pasta_minus = document.getElementById("pasta-minus");
const pasta_add = document.getElementById("pasta-add");
pasta_minus.addEventListener("click", function () {
  handleDecrement("pasta", "pasta",8);
});

pasta_add.addEventListener("click", function () {
  handleIncrement("pasta","pasta", 8);
});

// Taco counts
const taco_minus = document.getElementById("taco-minus");
const taco_add = document.getElementById("taco-add");
taco_minus.addEventListener("click", function () {
  handleDecrement("tacos", "taco",8);
});

taco_add.addEventListener("click", function () {
  handleIncrement("tacos","taco", 8);
});

// Enchilada counts
const enchilada_minus = document.getElementById("enchilada-minus");
const enchilada_add = document.getElementById("enchilada-add");
enchilada_minus.addEventListener("click", function () {
  handleDecrement("enchilada", "enchilada", 10);
});

enchilada_add.addEventListener("click", function () {
  handleIncrement("enchilada","enchilada", 10);
});

// Clear event
const clear_btn = document.getElementById("clear");
clear_btn.addEventListener("click", function () {
  handleClear();
});

// Order event
const order_btn = document.getElementById("order");
order_btn.addEventListener("click", function () {
  handleOrder();
});
