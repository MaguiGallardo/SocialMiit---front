import icon from "../logo.svg";
import "./EventoCard.css";
function EventoCard(){
    return (
     <div> 
        <div>
            <img src={icon} className="Imagen"/>
            <div>
                <span>Nombre Evento</span>
                <span>Descripción</span>
            </div>
        </div>
        <span>Fecha y hora</span>
    </div>
        
        
        
    );

    
}

export default EventoCard;