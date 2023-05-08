const typeChecker = (param: unknown): void => {
    if(typeof param === 'string'){
        console.log(param);
    }else{
        console.error('unknown type')
    }
}

typeChecker(5)