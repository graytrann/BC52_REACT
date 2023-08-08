import React, { useState } from "react";
import Icon from "./Icon";

export default function StateCar() {
  // chỗ nào động thì dùng state

  const [imgUrl, setImgUrl] = useState("./img/black-car.jpg");

  const handleChangeCar = (type) => {
    switch (type) {
      case "black":
        setImgUrl("./img/black-car.jpg");
        break;
      case "red":
        setImgUrl("./img/red-car.jpg");
        break;
      case "silver":
        setImgUrl("./img/silver-car.jpg");
        break;
      case "steel":
        setImgUrl("./img/steel-car.jpg");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* HÌNH  */}
        <div className="col-md-8">
          <img src={imgUrl} alt="car" width="100%" />
        </div>
        {/* CHỌN MÀU */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Colors</div>
            <div className="card-body">
              {/* <div
                className="d-flex mt-2"
                onClick={() => handleChangeCar("black")}
              >
                <img src="./img/icon-black.jpg" alt="black" width="80px"></img>
                <div className="ms-3">
                  <h3>Crystal Black</h3>
                  <b>Pearl</b>
                </div>
              </div>
              <div className="d-flex mt-2">
                <img
                  src="./img/icon-red.jpg"
                  alt="black"
                  width="80px"
                  onClick={() => handleChangeCar("red")}
                ></img>
                <div className="ms-3">
                  <h3>Rallye Red</h3>
                  <b>Pearl</b>
                </div>
              </div>
              <div className="d-flex mt-2">
                <img
                  src="./img/icon-silver.jpg"
                  alt="black"
                  width="80px"
                  onClick={() => handleChangeCar("silver")}
                ></img>
                <div className="ms-3">
                  <h3>Lunar Silver</h3>
                  <b>Pearl</b>
                </div>
              </div>
              <div className="d-flex mt-2">
                <img
                  src="./img/icon-steel.jpg"
                  alt="black"
                  width="80px"
                  onClick={() => handleChangeCar("steel")}
                ></img>
                <div className="ms-3">
                  <h3>Modern Steel</h3>
                  <b>Metallic</b>
                </div>
              </div> */}
              <Icon onChangeCar={handleChangeCar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
