import { createSlice } from "@reduxjs/toolkit";

const busTicketSlice = createSlice({
  name: "busTicket",
  initialState: {
    selectedSeats: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      // CÁCH 1
      //   const { isSelected, ...seat } = action.payload;

      //   // nếu đuộc chọn
      //   if (isSelected) {
      //     const selectedSeats = [...state.selectedSeats, seat];
      //     const totalPrice = state.totalPrice + seat.price;
      //     return { ...state, selectedSeats, totalPrice };
      //   }

      //   // nếu không
      //   const selectedSeats = state.selectedSeats.filter(
      //     (item) => item.id !== seat.id
      //   );
      //   const totalPrice = state.totalPrice - seat.price;
      //   return { ...state, selectedSeats, totalPrice };

      // CÁCH 2 : MUTABLE
      const { isSelected, ...seat } = action.payload;

      if (isSelected) {
        state.selectedSeats.push(seat);
        state.totalPrice += seat.price;
      } else {
        const index = state.selectedSeats.findIndex(
          (item) => item.id === seat.id
        );

        state.selectedSeats.splice(index, 1);
        state.totalPrice -= seat.price;
      }
    },

    removeSeat: (state, action) => {
      // CÁCH 1 : Immutable (BẤT BIẾN)
      //   const seatId = action.payload;
      //   const selectedSeats = state.selectedSeats.filter(
      //     (item) => item.id !== seatId
      //   );
      //   const totalPrice = selectedSeats.reduce(
      //     (result, item) => result + item.price,
      //     0
      //   );
      //   return { ...state, selectedSeats, totalPrice };

      // CÁCH 2 : Mutable (có thể thay đổi - không cần từ khóa return )
      const seatId = action.payload;
      const index = state.selectedSeats.findIndex((item) => item.id === seatId);
      state.selectedSeats.splice(index, 1);
      state.totalPrice = state.selectedSeats.reduce(
        (result, item) => result + item.price,
        0
      );
    },
  },
});

// lấy ra các action để gọi ở các components
export const { selectSeat, removeSeat } = busTicketSlice.actions;

// lấy reducer gán vào store
export default busTicketSlice.reducer;
