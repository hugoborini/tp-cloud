const auth = async (apiKey, apiKeyToverif, callbacksucess, callbackerror) => {
    if (apiKey != apiKeyToverif){
        return callbackerror();
    } else{
        return callbacksucess();
    }
}


module.exports = auth;
