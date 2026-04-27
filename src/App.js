import React, { useState } from 'react';
import './App.css';

const productNames = [
  "Cheese Puffs", "Potato Chips", "Choco Mallows", "Corn Crackers",
  "Gummy Bears", "Pretzels", "Butter Cookies", "Peanut Brittle",
  "Rice Crackers", "Caramel Popcorn", "Dried Mangoes", "Strawberry Wafers"
];

const productPrices = [49, 35, 55, 29, 45, 60, 75, 40, 32, 55, 85, 48];

const productImages = [
  "https://foodthatmakesyousmile.com/wp-content/uploads/2024/01/302.jpg",
  "https://www.allrecipes.com/thmb/WyCC-RL8cuAEKfYHsdnzqi64iTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73135-homestyle-potato-chips-ddmfs-0348-3x4-hero-c21021303c8849bbb40c1007bfa9af6e.jpg",
  "https://sa.kapamilya.com/absnews/abscbnnews/media/ancx/food-n-drink/2020/02/6chocolate.jpg",
  "https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2017/12/Baked-Sweet-Corn-Crackers-MOP.jpg?resize=740%2C493&ssl=1",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Oursons_g%C3%A9latine_march%C3%A9_Rouffignac.jpg",
  "https://www.allrecipes.com/thmb/jQRslNjmkoqg5yUuNfzrHJcoJ-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ranch-pretzels-recipe-8418575lutzflcat4x3-46a11f74c1f34a358578988f5faaacb9.jpg",
  "https://www.aheadofthyme.com/wp-content/uploads/2021/10/butter-cookies-4-683x1024.jpg",
  "https://www.simplyrecipes.com/thmb/ZWNf26cC6IPw8v4QyPhNImpcmJk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__11__Peanut-Brittle-LEAD-VERTICAl-bdfb8a4885834c59860e26020d508b42.jpg",
  "https://www.takaski.com/wp-content/uploads/2016/05/MINAMOTO-KICHOAN-Fukura-Premium-Rice-Crackers-1.jpg",
  "https://www.threeolivesbranch.com/wp-content/uploads/2023/10/caramel-popcorn-homemade-without-corn-syrup-threeolivesbranch-2.jpg",
  "https://delicacies.ph/wp-content/uploads/2023/01/Dried-Mango.webp",
  "https://www.silkrute.com/images/detailed/4189/81ZC3mRm5rL.jpg"
];

function pricecounter(items) {
  let prices = [49, 35, 55, 29, 45, 60, 75, 40, 32, 55, 85, 48];
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = items[i] * prices[i];
    total = total + price;
  }
  return total;
}

function App() {
  const [cart, setCart] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [showCart, setShowCart] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const addToCart = (index) => {
    let newCart = [...cart];
    newCart[index] = newCart[index] + 1;
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    let newCart = [...cart];
    if (newCart[index] > 0) {
      newCart[index] = newCart[index] - 1;
    }
    setCart(newCart);
  };

  const getTotalQty = () => {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count = count + cart[i];
    }
    return count;
  };

  const submitOrder = () => {
    if (getTotalQty() === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsDone(true);
    setShowCart(false);
  };

  const resetAll = () => {
    setCart([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setShowCart(false);
    setIsDone(false);
  };

  const toggleCart = () => {
    if (showCart === true) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  return (
    <div className="App">
      <div className="topbar">
        <div className="topbarleft">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/10486/10486481.png"
            alt="Logo" 
            style={{ width: '46px', height: '46px', filter: 'brightness(0) invert(1)'}} 
          />
          <h1>SnackStop</h1>
        </div>

        <button className="cartbtn" onClick={toggleCart}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/15737/15737380.png"
            alt="SnackStop Logo" 
            style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1)'}} 
          />
          {getTotalQty() > 0 && (
            <span className="cartbadge">{getTotalQty()}</span>
          )}
        </button>
      </div>

      <div className="pagecontent">
        {isDone === false && (
          <div>
            <p className="subtitle">Pick your favorite snacks!</p>

            <div className="productgrid">
              {productNames.map((name, i) => (
                <div className="productcard" key={i}>
                  <img className="productimg" src={productImages[i]} alt={name} />
                  <div className="productinfo">
                    <p className="productname">{name}</p>
                    <p className="productprice">₱{productPrices[i]}</p>

                    {cart[i] === 0 ? (
                      <button className="addtocartbtn" onClick={() => addToCart(i)}>
                        Add to Cart
                      </button>
                    ) : (
                      <button className="addedtocartbtn" onClick={() => addToCart(i)}>
                        Added to Cart
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {showCart === true && (
              <div className="orderoverlay" onClick={() => setShowCart(false)}>
                <div className="orderbox" onClick={(e) => e.stopPropagation()}>
                  <div className="orderheader">
                    <h2>Your Cart</h2>
                    <button className="closebtn" onClick={() => setShowCart(false)}>X</button>
                  </div>

                  <div className="orderscroll">
                    {getTotalQty() === 0 ? (
                      <p className="emptymsg">Nothing here yet.</p>
                    ) : (
                      <div className="orderlist">
                        {productNames.map((name, i) => {
                          if (cart[i] > 0) {
                            return (
                              <div className="orderitem" key={i}>
                                <img className="orderitemthumb" src={productImages[i]} alt={name} />
                                <div className="orderiteminfo">
                                  <p className="orderitemname">{name}</p>
                                  <p className="orderitemprice">₱{productPrices[i]}</p>
                                </div>
                                <div className="orderitemqty">
                                  <button onClick={() => removeFromCart(i)}>-</button>
                                  <span>{cart[i]}</span>
                                  <button onClick={() => addToCart(i)}>+</button>
                                </div>
                                <p className="orderitemsubtotal">₱{productPrices[i] * cart[i]}</p>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>

                  <div className="orderfooter">
                    <div className="summaryrow">
                      <span>Quantity:</span>
                      <span>{getTotalQty()} item(s)</span>
                    </div>
                    <div className="summaryrow">
                      <span>Total:</span>
                      <span className="summarytotal">₱{pricecounter(cart)}</span>
                    </div>
                    <button className="submitbtn" onClick={submitOrder}>Place Order</button>
                    <p className="continuemsg" onClick={() => setShowCart(false)}>Continue Shopping</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {isDone === true && (
          <div className="successbox">
            <h2>Order Placed!</h2>
            <p>Thank you for your order. Here is what you got:</p>

            <div className="orderlist">
              {productNames.map((name, i) => {
                if (cart[i] > 0) {
                  return (
                    <div className="orderitem" key={i}>
                      <img className="orderitemthumb" src={productImages[i]} alt={name} />
                      <div className="orderiteminfo">
                        <p className="orderitemname">{name}</p>
                        <p className="orderitemprice">₱{productPrices[i]}</p>
                      </div>
                      <p className="plainqty">x{cart[i]}</p>
                      <p className="orderitemsubtotal">₱{productPrices[i] * cart[i]}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            <div className="orderfooter successfooter">
              <div className="summaryrow">
                <span>Quantity:</span>
                <span>{getTotalQty()} item(s)</span>
              </div>
              <div className="summaryrow">
                <span>Total:</span>
                <span className="summarytotal">₱{pricecounter(cart)}</span>
              </div>
              <button className="resetbtn" onClick={resetAll}>Order Again</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;