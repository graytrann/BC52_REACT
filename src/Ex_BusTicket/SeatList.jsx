import React from "react";
import { useSelector } from "react-redux";
import SeatItem from "./SeatItem";

export default function SeatList({ seats }) {
  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });

  return (
    <div className="row">
      <h3 className="col-md-12 text-center bg-warning">TÀI XẾ</h3>
      {seats.map((seat) => {
        const isSelected = selectedSeats.find((item) => item.id === seat.id);
        return (
          <div className="col-md-3" key={seat.id}>
            <SeatItem seat={seat} isSelected={!!isSelected} />
          </div>
        );
      })}
    </div>
  );
}
