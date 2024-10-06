import icon from "../../public/logo192.png";

function EventoCard(){
    return (
        
        <div>
            <img src={icon}/>

        
            <div>

                <span>Nombre Evento</span>
                <span>Descripción</span>
                <span>Fecha y hora</span>

            </div>

        </div>
        
        
        
    );

    
}

export default EventoCard;