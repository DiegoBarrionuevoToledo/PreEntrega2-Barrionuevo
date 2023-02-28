import { Flex } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';






const ItemListContainer = () => {
 const { lanzamiento} = useParams()
 const datos = [

    {id: 1, nombre: "Wu-tang Clan / Enter the Wu-tang (36 chambers)", precio: 25000, año: 1993, imagen:"https://falabella.scene7.com/is/image/Falabella/gsc_113068977_521205_1?wid=800&hei=800&qlt=70",descripcion:"es el primer álbum de estudio del grupo de hip hop estadounidense Wu-Tang Clan, publicado el 9 de noviembre de 1993 por Loud Records, y distribuido a través de RCA Records.",stock:10 },
    {id: 2, nombre: "Nas / Illmatic", precio: 30000, año: 1994, imagen:"https://falabella.scene7.com/is/image/Falabella/gsc_113604730_693181_1?wid=1500&hei=1500&qlt=70",descripcion:"es el álbum de debut del rapero estadounidense Nas, lanzado el 19 de abril de 1994 por Columbia Records. Después de firmar con el sello con la ayuda de MC Serch, Nas grabó el álbum en 1992-1993 en Chung King Studios, Battery Studios, y Unique Recording Studios en Nueva York. Su producción estuvo a cargo de Nas, Large Professor, Pete Rock, Q-Tip, L.E.S., y DJ Premier." ,stock:7 },
    {id: 3, nombre: "Run DMC / Run DMC", precio: 55500, año: 1984, imagen:"https://i.scdn.co/image/ab67616d0000b2730c653d22500b21d83c6e2b82",descripcion:"Considerados el primer grupo rap hardcore, representativo del East Coast Rap, entre 1983 y 1987 establecieron el estilo para la próxima década: en ese proceso, abrieron la puerta tanto al rap politizado de Public Enemy y Boogie Down Productions como a las machadas gangsta de N.W.A (exponentes del West Coast Rap)",stock:2 },
    {id: 4, nombre: "Dr. Dre / The Chronic", precio: 1000, año: 1992, imagen:"https://upload.wikimedia.org/wikipedia/en/1/19/Dr.DreTheChronic.jpg",descripcion:"es el álbum debut como solista del rapero estadounidense, Dr. Dre, publicado el 15 de diciembre de 1992 a través de la discográfica Death Row Records y distribuido por Priority Records. Las sesiones de grabación del álbum tuvieron lugar en junio de 1992 en los estudios de Death Row en Los Ángeles, California y en Bernie Grundman Mastering en Hollywood, California. ",stock:60 },
    {id: 5, nombre: "Kendrick Lamar / Good Kid, M.A.A.D City ", precio: 10000, año: 2015, imagen:"https://i.scdn.co/image/ab67616d00001e02d58e537cea05c2156792c53d",descripcion:"es el segundo álbum de estudio del rapero estadounidense Kendrick Lamar. El álbum fue lanzado el 22 de octubre del 2012, por Aftermath Entertainment, y estuvo distribuido por Interscope Records.",stock:8 },
    {id: 6, nombre: "Joey Badass / B4.Da.$$ ", precio: 45000, año: 2012, imagen:"https://upload.wikimedia.org/wikipedia/en/f/ff/Joey_Badass_B4.Da.%24%24.jpg",descripcion:"pronunciado Before Da Money es el álbum de estudio debut del rapero estadounidense Joey Badass . Fue lanzado el 20 de enero de 2015, su vigésimo cumpleaños, por Cinematic Music Group y Relentless Records . El álbum fue lanzado en América del Norte y el Reino Unido, además de estar disponible para descarga digital en iTunes . ",stock:20 },


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
    
    const lanzamientoFilter = datos.filter((producto) =>
    { if (lanzamiento == "80s"){
      
return ( 1980 <= producto.año && producto.año <= 1989)
    } else if (lanzamiento == "90s") {
      
    return ( 1990 <= producto.año && producto.año <= 1999)
     } else {
      return( 2000 <= producto.año )
     }
    
    }
    
      );





  return (
    <div>
     
     
        { lanzamiento ? <ItemList productos = {lanzamientoFilter} /> : <ItemList productos = {datos} /> }
     
  
        
    </div>
  )
}

export default ItemListContainer




