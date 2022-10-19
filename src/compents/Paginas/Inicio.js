import React from 'react'
import "./Estilos/Inicio.css";
import image from "./Imagenes/domicilio.png";
import image2 from "./Imagenes/DomicilioComitan.jpg";




const Inicio = () => {
  return (
    

  
    <div id='articulos' >
    
       <br/>
       <br/>
  
       <br/>
       <br/>
  
   
         <h2> <i> Villa Corzo, chiapas. </i></h2>
         <br/>
       <br/>
         
       El dia que naci fue el 13 de febrero del 2001 en el municipio de Villa corzo, un pueblito muy bonito y 
       que extraño mucho visitar, supongo que el punto negativo de vivir ahi fue el calor ya que la temperatura
       mayor es de 35 grados.se localiza en la depresión central del estado, en una porción que en los tiempos 
       prehispánicos perteneció al cacicazgo de los chiapanecas; en la época de la Colonia pasó al dominio de 
       los frailes dominicos, quienes fundaron haciendas denominadas Frailescas.
       <br/>
       <br/>

       <div id='imagen1'>
        <img src={image} width="500" height="400"/>
      </div>

      <br/>

  
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div id='articulos2'>
       
 
<br/>
<br/>
      <h2> <i> Comitan de Dominguez, chiapas. </i></h2>
      <br/>
<br/>

      
      Actualmente estoy viviendo en Comitan con mi hermano mayor, en el barrio La cueva. Al principio 
      no me costumbraba al frio pero poco a poco me empezo a gustar mucho, ademas es un lugar muy bonito y comodo.
      Comitán de Domínguez es sinónimo de tierra entrañable, de orgullo chiapaneco, de amabilidad lugareña y de 
      un ámbito de paz y valiosas tradiciones. Las personas que deciden conocerlo y viajan hasta este hermoso 
      rincón de Chiapas, se encuentran con un clima envidiable, sabores exóticos, patios llenos de flores, 
      horizontes colmados de vegetación y rayos de sol, junto a inmemoriales vestigios de la cultura maya.
<br/>
<br/>


<div ></div>

<div id='imagen2'>
        <img src={image2} width="500" height="400" />
      </div>

      </div>

<br/>
    </div>
    
  )


  
}


export default Inicio




    

