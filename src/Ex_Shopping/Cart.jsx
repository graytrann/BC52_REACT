import React from "react";

export default function Cart({
  onCloseCart,
  carts,
  onDeleteProductFromCart,
  onHandleChangeQuantityFromCart,
}) {
  let total = carts.reduce((tongTien, spGioHang, index) => {
    return (tongTien += spGioHang.quantity * spGioHang.price);
  }, 0);
  return (
    <>
      <div style={{ display: "block" }} className="modal show" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content" style={{ width: "800px" }}>
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.img}
                            alt={item.name}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              onHandleChangeQuantityFromCart(item.id, true);
                            }}
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
                            onClick={() => {
                              onHandleChangeQuantityFromCart(item.id, false);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>{item.price.toLocaleString()}</td>
                        <td>{(item.price * item.quantity).toLocaleString()}</td>
                        <td>
                          <button
                            onClick={() => onDeleteProductFromCart(item.id)}
                            className="btn btn-danger"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <td>TỔNG TIỀN : {total.toLocaleString()} vnđ</td>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onCloseCart}
              >
                ĐÓNG
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
