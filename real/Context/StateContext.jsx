import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [coins, setCoins] = useState([]);
  const [market, setMarket] = useState([]);
  const [marketOption, setMarketOption] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);
  const [qtySbc, setQtySbc] = useState(0);
  const [isConsole, setIsConsole] = useState(true);
  const [coinsPrice, setCcoinsPrice] = useState(true);

  const devicetyp = (type) => {
    setIsConsole(type);
  };

  const addcoins = (Quantity) => {
    setCoins([Quantity]);
  };

  const addMarket = (marketOpen) => {
    setMarket([marketOpen]);
  };

  useEffect(() => {
    console.log('Updated market:', cartItems);
  }, [cartItems]);

  const moodScreen = (type) => {
    setDarkMode(type);
  };

  useEffect(() => {
    console.log('Updated market:', market);
  }, [market]);

  const onAdd = (product) => {
    if (qty === 0) {
      setCartItems((prev) => [...prev, product]);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      toast.success(` added to the cart.`);
    } else {
      toast.error(`can't added to the cart.`);
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty - 1 < 1 ? 1 : prevQty - 1;
      return newQty;
    });
  };

  return (
    <Context.Provider value={{
      darkMode, setDarkMode, totalPrice, setTotalPrice, setShowCart, showCart,
      totalQuantities, devicetyp, isConsole, setIsConsole, coins, addcoins,
      market, addMarket, marketOption, setMarketOption, qty, incQty, decQty, onAdd,
      cartItems, setCartItems
    }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
