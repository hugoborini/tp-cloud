const auth = (apiKey, apiKeyToverif, callbacksucess) => {
    if (apiKey === apiKeyToverif) {
        return callbacksucess();
    } else {
        throw "api key not valid";
    }
}


module.exports = auth;
