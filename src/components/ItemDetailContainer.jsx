import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
 
 const datos = [

    {id: 1, nombre: "Producto 1", precio: 1000, año: 1993, imagen:"https://falabella.scene7.com/is/image/Falabella/gsc_113068977_521205_1?wid=800&hei=800&qlt=70"  },
    {id: 2, nombre: "Producto 2", precio: 2000, año: 1994, imagen:"https://falabella.scene7.com/is/image/Falabella/gsc_113604730_693181_1?wid=1500&hei=1500&qlt=70" },
    {id: 3, nombre: "Producto 3", precio: 2500, año: 1984, imagen:"https://i.scdn.co/image/ab67616d0000b2730c653d22500b21d83c6e2b82"},
    {id: 4, nombre: "Producto 4", precio: 1000, año: 1992, imagen:"https://upload.wikimedia.org/wikipedia/en/1/19/Dr.DreTheChronic.jpg"},
    {id: 5, nombre: "Producto 5", precio: 2000, año: 2015, imagen:"https://i.scdn.co/image/ab67616d00001e02d58e537cea05c2156792c53d"},
    {id: 6, nombre: "Producto 6", precio: 4500, año: 2012, imagen:"https://upload.wikimedia.org/wikipedia/en/f/ff/Joey_Badass_B4.Da.%24%24.jpg"},


    ];
 
    return (
    <ItemDetail productos = {datos} />
  )
}

export default ItemDetailContainer
