import React from "react";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import data from "./data.json";
import { useSelector } from "react-redux";

export default function BusTicket() {
  const { totalPrice } = useSelector((state) => {
    return state.busTicket;
  });

  const handleBooking = () => {
    alert(`total price : ${totalPrice} $`);
  };
  return (
    <div className="container">
      <h1 className="text-center text-primary">CyberBus</h1>
      <div className="row">
        <div className="col-md-6">
          <SeatList seats={data} />
        </div>
        <div className="col-md-6">
          <Tickets />
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleBooking}>
            ĐẶT VÉ
          </button>
        </div>
      </div>
    </div>
  );
}
