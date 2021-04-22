const auth = (apiKey, apiKeyToverif, callbacksucess) => {
    if (Object.values(apiKeyToverif[0]).includes(apiKey)) {
        return callbacksucess();
    } else {
        throw "api key not valid";
    }
}


module.exports = auth;