const { ObjectId } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const helper = require('../helpers');
const presidents = mongoCollections.presidents;

const getAllPresidents = async () => {
    const presidentCollection = await presidents();
    const presidentList = await presidentCollection.find({}).toArray();
    if (!presidentList) throw 'Error : Could not get all presidents';
    return presidentList;
};

const getPresident = async(id)=>{
    id = helper.checkId(id);
    const presidentCollection = await presidents();
    const president = await presidentCollection.findOne({_id:new ObjectId(id)});
    if (!president) throw 'Error : Could not get president';
    return president;
}

module.exports={
    getAllPresidents,
    getPresident
}