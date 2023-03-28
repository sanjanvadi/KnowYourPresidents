const mongoCollections = require('../config/mongoCollections');
const presidents = mongoCollections.presidents;

const getAllPresidents = async () => {
    const presidentCollection = await presidents();
    const presidentList = await presidentCollection.find({}).toArray();
    if (!presidentList) throw 'Error : Could not get all owners';
    return presidentList;
};