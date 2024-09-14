// Create a class named Product with the Following Properties:
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Create a class named ShoppingCartItem with the following properties
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// create a class named shoppingcart that contains an array of ShoppingCartItem instances.
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to get the total number of items in the cart
  getTotalItems() {
    return this.items.length;
  }

  // Method to add an item to the cart
  addItem(product, quantity) {
    const cartItem = new ShoppingCartItem(product, quantity);
    this.items.push(cartItem);
  }

  // Method to remove an item from the cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to display the items in the cart
  displayCart() {
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.getTotalPrice()}`
      );
    });
  }

  // Method to calculate the total price of all items in the cart
  getCartTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

// Create some products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Smartphone", 800);
const product3 = new Product(3, "Tablet", 400);

//  Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart items
console.log("Displaying Cart Items:");
cart.displayCart();

// Display the total price of the cart
console.log(`Total Cart Price: $${cart.getCartTotal()}`);

// Remove an item from the cart
cart.removeItem(1);

// Display the updated cart
console.log("Cart after removing an item:");
cart.displayCart();

// Display the updated total price of the cart
console.log(`Updated Cart Price: $${cart.getCartTotal()}`);
