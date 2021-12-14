import { World, Commands } from 'mojang-minecraft';

//Description: Funciones Para Facilitar CommandFeedback...

//Envia Un Mensaje a todos los jugadores...
export const MessageToAll = (MESSAGE) => {
    Commands.run(`tellraw @a {"rawtext":[{"text":"${MESSAGE}"}]}`,World.getDimension('overworld'));
}

//Envia Un Mensaje a todos los jugadores...
export const MessageToPlayer = (PLAYER_NAME,MESSAGE) => {
    Commands.run(`tellraw "${PLAYER_NAME}" {"rawtext":[{"text":"${MESSAGE}"}]}`,World.getDimension('overworld'));
}