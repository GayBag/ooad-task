const User = require ('./user.js');
const Product = require( "./product.js")
const ShoppingCart = require ('./shoppingCart.js')

let watch = new Product ("Cover","red","20000$");
let watch1 = new Product ("Casio","blue","15000$")
let shoppingcart  = new ShoppingCart();
shoppingcart.add(watch);
shoppingcart.add(watch1);
let user = new User("Gayane",shoppingcart);

console.log (user.shoppingcart.add(watch1));




