import { World, Commands } from 'mojang-minecraft'; 
import { MessageToPlayer } from '../../lib/TellrawSystem.js';
import { camera_configure } from './ca_system.js';



//Comando de configuracion de camara...
export const ca_config = (MSG_EVENT) => {

    let args = MSG_EVENT.message.split(' ');

    if( args[0] == '!camera' && args[1] == 'set' ){
        if( args[2] >= 1 && args[2] <= 5 ){
            MSG_EVENT.cancel = true;
            camera_configure(`cam${args[2]}`,MSG_EVENT);
        }else if( args[2] >= 6 ){
            MSG_EVENT.cancel = true;
            //Comando Fallido... (Colocar un /tellraw para notificar que fallo...)
            MessageToPlayer(MSG_EVENT.sender.nameTag,`§cEl Numero Es Muy Alto , El Maximo Es "5"`);
        }else {
            MSG_EVENT.cancel = true;
            //Comando Fallido... (Colocar un /tellraw para notificar que fallo...)
            MessageToPlayer(MSG_EVENT.sender.nameTag,`§cPorfavor Coloca un numero EJEMPLO: !camera set 5`);
        }
    }

}