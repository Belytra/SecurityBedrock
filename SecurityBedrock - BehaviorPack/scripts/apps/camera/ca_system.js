import { World, Commands } from 'mojang-minecraft'; 



//Mueve el jugador a la posicion de la entidad con su nombre que simula estar viendo la camara
export const ca_return = ( PLAYER_NAME ) => {
    Commands.run(`tp "${PLAYER_NAME}" @e[type=sbc:incam_player,name="${PLAYER_NAME}",c=1]`,World.getDimension('overworld'));
    Commands.run(`event entity @e[type=sbc:incam_player,name="${PLAYER_NAME}"] sbc:despawn`,World.getDimension('overworld'));
    Commands.run(`tag "${PLAYER_NAME}" remove returning`,World.getDimension('overworld'));
    Commands.run(`tag "${PLAYER_NAME}" remove incam`,World.getDimension('overworld'));
    Commands.run(`effect "${PLAYER_NAME}" clear`,World.getDimension('overworld'));    
}

//Funcion Para Activar El Uso De Una Camara...
export const ca_camera_active_tags = (CAM_TAG,PLAYER_NAME,GET_CAM) => {
    let verifyCam = Commands.run(`tag @e[type=sbc:camera_sit] list`,World.getDimension('overworld'));
    if( verifyCam.statusMessage.includes(`${PLAYER_NAME.replace(' ','_') + CAM_TAG}`) ){
        if( GET_CAM.includes('incam_join')){
            Commands.run(`ride @a[name="${PLAYER_NAME}",tag=incam_join] start_riding @e[tag=${PLAYER_NAME.replace(' ','_')+ CAM_TAG},c=1]`,World.getDimension('overworld'));
        }
        Commands.run(`execute @a[name="${PLAYER_NAME}",tag=!incam_join] ~ ~ ~ summon sbc:incam_player ~ ~ ~ a "${PLAYER_NAME}"`,World.getDimension('overworld'));
        Commands.run(`tag "${PLAYER_NAME}" add incam_join`,World.getDimension('overworld'));
    }else {
        Commands.run(`tellraw "${PLAYER_NAME}" {"rawtext":[{"text":"§cCamara no Configurada..","color":"red"}]}`,World.getDimension('overworld'));
        Commands.run(`tag "${PLAYER_NAME}" remove ${CAM_TAG}`,World.getDimension('overworld'));
    }    
}

//Verificar Que el jugador tenga el tag de un slot para activar el uso de la camara...
export const ca_verify = ( PLAYER_NAME, STATUS_MESSAGE ) => {
    switch (true) {
        case STATUS_MESSAGE.includes('cam1'):
            ca_camera_active_tags('cam1',PLAYER_NAME,STATUS_MESSAGE);
            break;
        case STATUS_MESSAGE.includes('cam2'):
            ca_camera_active_tags('cam2',PLAYER_NAME,STATUS_MESSAGE);
            break;
        case STATUS_MESSAGE.includes('cam3'):
            ca_camera_active_tags('cam3',PLAYER_NAME,STATUS_MESSAGE);
            break;
        case STATUS_MESSAGE.includes('cam4'):
            ca_camera_active_tags('cam4',PLAYER_NAME,STATUS_MESSAGE);
            break;
        case STATUS_MESSAGE.includes('cam5'):
            ca_camera_active_tags('cam5',PLAYER_NAME,STATUS_MESSAGE);
            break;
        default:
            break;
    }
}

//Establece los tags necesarios para su funcionamiento a la camara...
export const camera_configure = (CAM_SLOT_TAG,MSG_EVENT) => {
    Commands.run(`execute "${MSG_EVENT.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add ${MSG_EVENT.sender.nameTag.replace(' ','_') + CAM_SLOT_TAG}`,World.getDimension('overworld'));
    Commands.run(`execute "${MSG_EVENT.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add configured`,World.getDimension('overworld'));
    Commands.run(`execute "${MSG_EVENT.sender.nameTag}" ~ ~ ~ execute @e[type=sbc:camera_sit,r=5,c=1,tag=${MSG_EVENT.sender.nameTag.replace(' ','_') + CAM_SLOT_TAG}] ~ ~ ~ tellraw "${MSG_EVENT.sender.nameTag}" {"rawtext":[{"text":"§aCamara Configurada Correctamente..."}]}`,World.getDimension('overworld'));
}
