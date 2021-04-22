const admin = require('firebase-admin');

const serviceAccount = require('../../../serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const API_KEYS_REF = db.collection('API_KEYS');

// const callFireBase = async () => {
//     const result = await API_KEYS_REF.get();
//     return result;
// }

// .then(keys => keys.forEach(key => key.data()));

const getAllAPiKeys = async () => {
    try {
        let keys;
        // const result = await API_KEYS_REF.get();
        // response.forEach(key => keys = key.data());
        return keys;
    }
    catch (e) {
        console.log(e);
    }
}


console.log(getAllAPiKeys());

