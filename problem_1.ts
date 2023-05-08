const logger = (param1:string, param2:number = 3):void => {
    for (let i = 0; i < param2; i++) {
        console.log(param1);
    }
}

logger('azim',5)