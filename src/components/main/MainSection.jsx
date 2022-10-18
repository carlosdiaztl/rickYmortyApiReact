import React from "react";
import Form1 from "./form/Form1.jsx";
const MainSection = () => {
 

  return (
    
      <div className="main_viajes">
      <h3 className="main_h2"> Busca un nuevo destino y <br/> comienza la aventura.</h3>
      <h6 className="main_h6"> Descubre vuelos al mejor precio y perfectos para cualquier viaje </h6>
       <span className="main_span">
       <button>Viaje redondo</button>
       <button>Viaje sencillo</button>
       </span>
        <Form1/>
      </div>
    
  );
};
export default MainSection;
