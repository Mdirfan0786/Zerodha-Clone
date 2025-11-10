import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      <h3 className="title">Orders ({allOders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOders.map((stock, index) => {
            const currVal = stock.price * stock.qty;

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="no-orders">
        {!allOders.length ? (
          <p>You haven't placed any orders today</p>
        ) : (
          <p>You have {allOders.length} Orders. Buy More Orders!</p>
        )}

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
