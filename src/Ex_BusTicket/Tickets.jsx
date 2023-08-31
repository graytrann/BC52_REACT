import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeSeat } from "../redux/actions/busTicketActions";
import { removeSeat } from "../redux/slices/busTicketSlice";

export default function Tickets() {
  // nhận tham số từ Store Redux
  const { selectedSeats } = useSelector((state) => {
    return state.busTicket;
  });

  //DISPATCH
  const dispatch = useDispatch();

  const handleRemove = (seatId) => {
    // dispatch({ type: "removeSeat", payload: seatId });

    dispatch(removeSeat(seatId));
  };
  return (
    <div>
      <h3 className="col-md-12 text-center bg-info">DANH SÁCH VÉ ĐANG CHỌN</h3>
      {selectedSeats.map((item) => {
        return (
          <div className="mb-2" key={item.id}>
            <span className="me-4">
              {item.name} - {item.price}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(item.id)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
