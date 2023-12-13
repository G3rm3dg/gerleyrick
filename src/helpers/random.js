const getRandomNumber = (limit) => {
    //? [puede ser 0, pero nunca vaa ser 1....... 0===>0.99999]
    return Math.floor(Math.random()* limit) + 1;
}

export {getRandomNumber};