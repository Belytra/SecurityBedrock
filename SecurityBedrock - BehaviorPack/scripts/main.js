import { World, Commands } from 'mojang-minecraft'; 

const StatucCode_Check = ( cmd ) => {

    //Ejecutar comando...
    let ST_CHECK = Commands.run(cmd,World.getDimension('overworld'));

    if( ST_CHECK.statusCode == 0 ){
        return 5
    }

}

World.events.tick.subscribe(ev => {
    let verify = Commands.run(`/testfor @a[tag=incam]`,World.getDimension('overworld'));

    if(verify.statusCode == 0){
        verify.victim.forEach(el => {
            let getcam = Commands.run(`/tag @a[name="${el}"] list`,World.getDimension('overworld'));
            //Commands.run(`/say ${el.replace(' ', '_')}`,World.getDimension('overworld'));
            
            if( getcam.statusMessage.includes('cam1') ){
                let verifyCam1 = Commands.run(`/tag @e[type=sbc:camera_sit] list`,World.getDimension('overworld'));
                if( verifyCam1.statusMessage.includes(`${el.replace(' ','_') + 'cam1'}`) ){
                    if( getcam.statusMessage.includes('incam_join')){
                        Commands.run(`/ride @a[name="${el}",tag=incam_join] start_riding @e[tag=${el.replace(' ','_')+"cam1"},c=1]`,World.getDimension('overworld'));
                    }
                    Commands.run(`/execute @a[name="${el}",tag=!incam_join] ~ ~ ~ summon sbc:incam_player ~ ~ ~ a "${el}"`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" add incam_join`,World.getDimension('overworld'));
                }else {
                    Commands.run(`/tellraw "${el}" {"rawtext":[{"text":"§cCamara no Configurada..","color":"red"}]}`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" remove cam1`,World.getDimension('overworld'));
                }
            }else if( getcam.statusMessage.includes('cam2') ){
                let verifyCam1 = Commands.run(`/tag @e[type=sbc:camera_sit] list`,World.getDimension('overworld'));
                if( verifyCam1.statusMessage.includes(`${el.replace(' ','_') + 'cam2'}`) ){
                    if( getcam.statusMessage.includes('incam_join')){
                        Commands.run(`/ride @a[name="${el}",tag=incam_join] start_riding @e[tag=${el.replace(' ','_')+"cam2"},c=1]`,World.getDimension('overworld'));
                    }
                    Commands.run(`/execute @a[name="${el}",tag=!incam_join] ~ ~ ~ summon sbc:incam_player ~ ~ ~ a "${el}"`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" add incam_join`,World.getDimension('overworld'));
                }else {
                    Commands.run(`/tellraw "${el}" {"rawtext":[{"text":"§cCamara no Configurada..","color":"red"}]}`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" remove cam2`,World.getDimension('overworld'));
                }
            }else if( getcam.statusMessage.includes('cam3') ){
                let verifyCam1 = Commands.run(`/tag @e[type=sbc:camera_sit] list`,World.getDimension('overworld'));
                if( verifyCam1.statusMessage.includes(`${el.replace(' ','_') + 'cam3'}`) ){
                    if( getcam.statusMessage.includes('incam_join')){
                        Commands.run(`/ride @a[name="${el}",tag=incam_join] start_riding @e[tag=${el.replace(' ','_')+"cam3"},c=1]`,World.getDimension('overworld'));
                    }
                    Commands.run(`/execute @a[name="${el}",tag=!incam_join] ~ ~ ~ summon sbc:incam_player ~ ~ ~ a "${el}"`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" add incam_join`,World.getDimension('overworld'));
                }else {
                    Commands.run(`/tellraw "${el}" {"rawtext":[{"text":"§cCamara no Configurada..","color":"red"}]}`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" remove cam3`,World.getDimension('overworld'));
                }
            }else if( getcam.statusMessage.includes('cam4') ){
                let verifyCam1 = Commands.run(`/tag @e[type=sbc:camera_sit] list`,World.getDimension('overworld'));
                if( verifyCam1.statusMessage.includes(`${el.replace(' ','_') + 'cam4'}`) ){
                    if( getcam.statusMessage.includes('incam_join')){
                        Commands.run(`/ride @a[name="${el}",tag=incam_join] start_riding @e[tag=${el.replace(' ','_')+"cam4"},c=1]`,World.getDimension('overworld'));
                    }
                    Commands.run(`/execute @a[name="${el}",tag=!incam_join] ~ ~ ~ summon sbc:incam_player ~ ~ ~ a "${el}"`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" add incam_join`,World.getDimension('overworld'));
                }else {
                    Commands.run(`/tellraw "${el}" {"rawtext":[{"text":"§cCamara no Configurada..","color":"red"}]}`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" remove cam4`,World.getDimension('overworld'));
                }
            }else if( getcam.statusMessage.includes('cam5') ){
                let verifyCam1 = Commands.run(`/tag @e[type=sbc:camera_sit] list`,World.getDimension('overworld'));
                if( verifyCam1.statusMessage.includes(`${el.replace(' ','_') + 'cam5'}`) ){
                    if( getcam.statusMessage.includes('incam_join')){
                        Commands.run(`/ride @a[name="${el}",tag=incam_join] start_riding @e[tag=${el.replace(' ','_')+"cam5"},c=1]`,World.getDimension('overworld'));
                    }
                    Commands.run(`/execute @a[name="${el}",tag=!incam_join] ~ ~ ~ summon sbc:incam_player ~ ~ ~ a "${el}"`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" add incam_join`,World.getDimension('overworld'));
                }else {
                    Commands.run(`/tellraw "${el}" {"rawtext":[{"text":"§cCamara no Configurada..","color":"red"}]}`,World.getDimension('overworld'));
                    Commands.run(`/tag "${el}" remove cam5`,World.getDimension('overworld'));
                }
            }

            //Return Verification...

            if( getcam.statusMessage.includes('returning') ){

                Commands.run(`/tp "${el}" @e[type=sbc:incam_player,name="${el}",c=1]`,World.getDimension('overworld'));
                Commands.run(`/event entity @e[type=sbc:incam_player,name="${el}"] sbc:despawn`,World.getDimension('overworld'));
                Commands.run(`/tag "${el}" remove returning`,World.getDimension('overworld'));
                Commands.run(`/tag "${el}" remove incam`,World.getDimension('overworld'));
                Commands.run(`/effect "${el}" clear`,World.getDimension('overworld'));

            }

        });
    }
});

World.events.beforeChat.subscribe(ev => {

    switch (ev.message) {
        case '!camera set 1':
            ev.cancel = true;
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add ${ev.sender.nameTag.replace(' ','_') + 'cam1'}`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add configured`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ execute @e[type=sbc:camera_sit,r=5,c=1,tag=${ev.sender.nameTag.replace(' ','_') + 'cam1'}] ~ ~ ~ tellraw "${ev.sender.nameTag}" {"rawtext":[{"text":"§aCamara Configurada Correctamente..."}]}`,World.getDimension('overworld'));

            break;
        case '!camera set 2':
            ev.cancel = true;
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add ${ev.sender.nameTag.replace(' ','_') + 'cam2'}`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add configured`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ execute @e[type=sbc:camera_sit,r=5,c=1,tag=${ev.sender.nameTag.replace(' ','_') + 'cam2'}] ~ ~ ~ tellraw "${ev.sender.nameTag}" {"rawtext":[{"text":"§aCamara Configurada Correctamente..."}]}`,World.getDimension('overworld'));

            break;
        case '!camera set 3':
            ev.cancel = true;
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add ${ev.sender.nameTag.replace(' ','_') + 'cam3'}`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add configured`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ execute @e[type=sbc:camera_sit,r=5,c=1,tag=${ev.sender.nameTag.replace(' ','_') + 'cam3'}] ~ ~ ~ tellraw "${ev.sender.nameTag}" {"rawtext":[{"text":"§aCamara Configurada Correctamente..."}]}`,World.getDimension('overworld'));

            break;
        case '!camera set 4':
            ev.cancel = true;
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add ${ev.sender.nameTag.replace(' ','_') + 'cam4'}`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add configured`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ execute @e[type=sbc:camera_sit,r=5,c=1,tag=${ev.sender.nameTag.replace(' ','_') + 'cam4'}] ~ ~ ~ tellraw "${ev.sender.nameTag}" {"rawtext":[{"text":"§aCamara Configurada Correctamente..."}]}`,World.getDimension('overworld'));

            break;
        case '!camera set 5':
            ev.cancel = true;
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add ${ev.sender.nameTag.replace(' ','_') + 'cam5'}`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ tag @e[type=sbc:camera_sit,r=5,c=1,tag=!configured] add configured`,World.getDimension('overworld'));
            Commands.run(`/execute "${ev.sender.nameTag}" ~ ~ ~ execute @e[type=sbc:camera_sit,r=5,c=1,tag=${ev.sender.nameTag.replace(' ','_') + 'cam5'}] ~ ~ ~ tellraw "${ev.sender.nameTag}" {"rawtext":[{"text":"§aCamara Configurada Correctamente..."}]}`,World.getDimension('overworld'));

            break;       
        default:
            break;
    }

});