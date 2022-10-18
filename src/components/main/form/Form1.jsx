import React from "react";
import logoAvion  from '../../../icons/plane.svg'

const Form1 = () => {
  return (
    <form className="main_form">
      <span className="main_form_span">
       
        <h6>Origen</h6>
        <select> 
                
                <option> Medellin</option>
            </select>
      </span>
      <span className="main_form_span">
   
        <h6>Seleccion un destino</h6>
        <select> 
                <option>---</option>
                <option> Medellin</option>
            </select>
      </span>
      <span className="main_form_spancitos">
   
        <h6>Salida</h6>
        <input
          type="date"
          name='date'
          className="main_form_control"
          aria-label="Fecha"
          aria-describedby="date"
          min="2022-10-16"
         max="2022-12-31"
           />
      </span>
      <span className="main_form_spancitos">
        <h6>Regreso</h6>
        <input
          type="date"
          name='date'
          className="main_form_control"
          aria-label="Fecha"
          aria-describedby="date"
          min="2022-10-16"
         max="2022-12-31"
           />
          
      </span>
      <span className="main_form_spancitos">
        <h6>Pasajeros</h6>
        <select> 
                <option> 1 Adulto</option>
                <option> 2 Adulto</option>
                <option> 3 Adulto</option>
                <option> 4 Adulto</option>
            </select>
      </span>
      <span className="main_form_spancitos">
        {" "}
        <h6>¿Tienes un código de promoción?</h6>
       <input type="text" style={{marginLeft:"5px"}} placeholder="-- -- -- --" />
      </span>
      <button > <img style={{width:'5%'}} src={logoAvion} alt="logo avion" /> <p>Buscar vuelos </p>  </button>
      
      
    </form>
  );
};
export default Form1;
