const admin = require('firebase-admin');

const serviceAccount = require('../../../serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const API_KEYS_REF = db.collection('API_KEYS');


const getAllAPiKeys = async () => {
    let keys = [];
    const result = await API_KEYS_REF.get();
    result.forEach(key => keys.push(key.data()));
    return keys;
}


// (async () => { console.log(await getAllAPiKeys()) })()

module.exports = getAllAPiKeys;

