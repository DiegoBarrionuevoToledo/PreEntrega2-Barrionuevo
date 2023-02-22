import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => {
        return <Item key={producto.id} id={producto.id} name={producto.nombre} precio={producto.precio} año={producto.año} imagen ={producto.imagen} />;
      })}
    </div>
  );
};

export default ItemList;
