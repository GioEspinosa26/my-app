import React from 'react'
import image7 from "./Imagenes/correr.jpg";
import image8 from "./Imagenes/escucharmusica.png";
import image9 from "./Imagenes/lectura.jpg";
import image10 from "./Imagenes/nadar.jpg";
import image11 from "./Imagenes/bailar.jpg";
import image12 from "./Imagenes/dibujar.jpg";

const Acerca = () => {
  return (
    <div>
      <p>
      <h3>1. CORRER </h3>
      <div id='imagen7'>
               <img src={image7} width="500" height="400" />
             </div>
      </p>
      <p>
     <h3>2. ESCUCHAR MUSICA</h3>
     <div id='imagen8'>
               <img src={image8} width="500" height="400" />
             </div>
     </p>
     
         <p>
         <h3>3. LEER HISTORIAS DE TERROR</h3>
         <div id='imagen9'>
               <img src={image9} width="500" height="400" />
             </div>
         </p>
         <p>
      <h3>4. NADAR </h3>
      <div id='imagen10'>
               <img src={image10} width="500" height="400" />
             </div>
      </p>
      <p>
     <h3>5. BAILAR</h3>
     <div id='imagen11'>
               <img src={image11} width="500" height="400" />
             </div>
     </p>
     
         <p>
         <h3>6. DIBUJAR</h3>
         <div id='imagen12'>
               <img src={image12} width="500" height="400" />
             </div>
         </p>
    </div>
  

  )
}

export default Acerca
