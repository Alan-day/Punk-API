// You're given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "orange", price: 90 },
  { name: "pineapple", price: 40 },
];
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "pineapple", price: 40}, {name: "lemonade", price: 50}, {name: "orange", price: 90}]

sortDrinkByPrice = (drinks) => {
  return drinks.sort((a, b) => a.price - b.price);
};
