import React from 'react'

const Datos = () => {
 

const datos = [

    {id: 1, nombre: "Producto 1", precio: 1000, año: 1993 },
    {id: 2, nombre: "Producto 2", precio: 2000, año: 1994 },
    {id: 3, nombre: "Producto 3", precio: 2500, año: 1984},
    {id: 4, nombre: "Producto 4", precio: 1000, año: 1992},
    {id: 5, nombre: "Producto 5", precio: 2000, año: 2015},
    {id: 6, nombre: "Producto 6", precio: 4500, año: 2012 },


    ];
    
    const getDatos = () => {
    
      return new Promise ((resolve, reject) => {
        if (datos.lenght === 0){
          reject (new Error("no hay datos que mostrar"));
        }
        setTimeout(() => {
          resolve (datos);
        }, 2000)
    
      }
      )
     ;
    };
    
    // getDatos().then((datos) => console.log(datos));
    
    async function fetchingData(){
    try {
      const datosFetched = await getDatos();
      console.log(datosFetched);
    } catch (err) {
      console.log(err);
    }
    
    }
    
    fetchingData();
    
    
    return (
        <div>
          {
            datos.map((prod)=>{
              return (
                <div key={prod.id} >
                  <h1>{prod.nombre}</h1>
                  <p>{prod.precio}</p>
                  <p>{prod.año}</p>
                </div>
              );
            })}
        </div>
      );
    };
    
    export default App