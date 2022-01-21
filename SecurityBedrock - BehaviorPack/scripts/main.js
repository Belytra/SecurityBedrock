import { World, Commands } from 'mojang-minecraft'; 
import { ca_config } from './apps/camera/ca_commands.js';
import { ca_return, ca_verify } from './apps/camera/ca_system.js';


World.events.tick.subscribe(ev => {

    //Obtiene Todos Los Jugadores Con El Tag "incam"...
    let verify = Commands.run(`testfor @a[tag=incam]`,World.getDimension('overworld'));


    //Si Encuentra al menos un jugador con el tag "incam" Hace lo Siguiente...
    if(verify.statusCode == 0){

        //Por Cada Jugador Encontrado Hace Lo Siguiente...
        verify.victim.forEach(VICTIM_NAME => {

            //Obtiene La lista de tags del jugador...
            let GET_CAM_TAGS = Commands.run(`tag @a[name="${VICTIM_NAME}"] list`,World.getDimension('overworld')).statusMessage;
            
            //Si La Lista De Tags Incluye ( cam1 , cam2 , cam3 , cam4 0 cam5 )
            ca_verify(VICTIM_NAME,GET_CAM_TAGS);

            //Regresa el Jugador a la posicion original... 
            if( GET_CAM_TAGS.includes('returning') ){
                ca_return(VICTIM_NAME)
            }

        });

    }

});

World.events.beforeChat.subscribe(ev => {
    ca_config(ev);
});