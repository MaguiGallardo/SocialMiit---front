import icon from "../logo.svg";
import "./EventoCard.css";
function EventoCard(){
    return (
     <div className="DivMayor"> 
        <div className="PrimerDiv">
            <img src={icon} className="Imagen"/>
            <div className="SegundoDiv">
                <span>Nombre Evento</span>
                <span>Descripción</span>
            </div>
        </div>
        <div className="fechaHora">
         <span className="txtFecha">Fecha</span>
         <span className="txtHora">hora</span>
        </div>
       
    </div>
        
        
        
    );

    
}

export default EventoCard;