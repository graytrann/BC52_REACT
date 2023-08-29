import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectSeat } from "../redux/actions/busTicketActions";
// import { useEffect } from "react";

export default function SeatItem({ seat, isSelected }) {
  const dispatch = useDispatch();

  //state quản lý trạng thái ghế có đang được chọn hay không
  // const [isSelected, setIsSelected] = useState(false);

  let classes = "btn m-2 w-50";
  if (seat.isBooked) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success  ";
  } else {
    classes += " btn-secondary";
  }

  // HandleSelect đổi trạng thái (Cách 1)
  const handleSelect = () => {
    // setIsSelected(!isSelected);

    // gửi isSelected để check true false để push và xóa
    // dispatch({
    //   type: "selectSeat",
    //   payload: { ...seat, isSelected: !isSelected }, // để !isSelected vì setState là hàm BĐB nên cần thời gian để chạy
    // });
     dispatch(selectSeat({ ...seat, isSelected: !isSelected }));
  };

  // HandleSelect đổi trạng thái (Cách 2)
  // useEffect(() => {
  //   // chắc chắn là state isSelected vừa bị thay đổi
  //   dispatch({
  //     type: "selectSeat",
  //     payload: { ...seat, isSelected: !isSelected },
  //   });
  // }, [isSelected]);

  return (
    <button className={classes} disabled={seat.isBooked} onClick={handleSelect}>
      {seat.name}
    </button>
  );
}
