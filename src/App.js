import './App.css';
import MenuItem from './components/MenuItem';
import Descriptor from "./components/Descriptor";
import React, { useState } from 'react';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = (id) => {
    return cart.filter(item => item.id === id).length;
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('No items in cart');
    } else {
      const uniqueItems = [...new Set(cart)];
      const orderDetails = uniqueItems.map(item => `${getQuantity(item.id)} ${item.title}`).join('\n');
      alert(`Order placed!\n${orderDetails}`);
    }
  };

  return (
    <div>
      <Descriptor />
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem 
            key={item.id} 
            title={item.title} 
            description={item.description}
            imageName={item.imageName}
            price={item.price}
            addToCart={() => addToCart(item)}
            removeFromCart={() => removeFromCart(item.id)}
            quantity={getQuantity(item.id)}
          />
        ))}
      </div>
      <div>
        <Cart cart={cart} clearCart={clearCart} placeOrder={placeOrder} />
      </div>
    </div>
  );
}

export default App;
