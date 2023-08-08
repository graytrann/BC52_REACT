import React from "react";

const icons = [
  {
    type: "black",
    name: "Crystal Black",
    desc: "Pearl",
    url: "./img/icon-black.jpg",
  },
  {
    type: "red",
    name: "Rallye Red",
    desc: "Metallic",
    url: "./img/icon-red.jpg",
  },
  {
    type: "silver",
    name: "Lunar Silver",
    desc: "Pearl",
    url: "./img/icon-silver.jpg",
  },
  {
    type: "steel",
    name: "Modern Steel",
    desc: "Metallic",
    url: "./img/icon-steel.jpg",
  },
];
// console.log(icons);
//return () là JSX , còn muốn viết JS luôn thì bỏ ()
export default function Icon({ onChangeCar }) {
  return icons.map((icon) => {
    return (
      <div
        className="card"
        key={icon.name}
        onClick={() => onChangeCar(icon.type)}
      >
        <div className="card-body d-flex">
          <img src={icon.url} alt={icon.type} width="80px"></img>
          <div className="ms-3">
            <h3>{icon.name}</h3>
            <b>{icon.desc}</b>
          </div>
        </div>
      </div>
    );
  });
}
