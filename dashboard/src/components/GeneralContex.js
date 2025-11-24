import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [actionWindow, setActionWindow] = useState({
    type: null, // "BUY" | "SELL"
    uid: "",
  });

  const openBuyWindow = (uid) => {
    setActionWindow({ type: "BUY", uid });
  };

  const openSellWindow = (uid) => {
    setActionWindow({ type: "SELL", uid });
  };

  const closeBuyWindow = () => {
    if (actionWindow.type === "BUY") {
      setActionWindow({ type: null, uid: "" });
    }
  };

  const closeSellWindow = () => {
    if (actionWindow.type === "SELL") {
      setActionWindow({ type: null, uid: "" });
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {props.children}

      {actionWindow.type === "BUY" && (
        <BuyActionWindow uid={actionWindow.uid} />
      )}
      {actionWindow.type === "SELL" && (
        <SellActionWindow uid={actionWindow.uid} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
