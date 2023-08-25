import React from "react";
import SeatList from "./SeatList";
import Tickets from "./Tickets";
import data from "./data.json";

export default function BusTicket() {
  return (
    <div>
      <h1>CyberBus</h1>
      <div className="row">
        <div className="col-md-6">
          <SeatList />
        </div>
        <div className="col-md-6">
          <Tickets />
        </div>
      </div>
    </div>
  );
}
