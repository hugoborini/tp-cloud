const auth = (apiKey, apiKeyToverif, callbacksucess) => {
    return new Promise(function (resolve, reject) {
        if (apiKey === apiKeyToverif)
            resolve();
        else
            reject();
    });
    if (apiKey === apiKeyToverif){
        return callbacksucess();
    } else{
        throw "api key not valid"; 
    }
}


module.exports = auth;
