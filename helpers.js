const { ObjectId } = require("mongodb");

function checkId(id) {

    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'Invalid object ID';
    if (!id) throw 'Please provide an ID';
    if(typeof id !== 'string') throw "ID is not a string";
    if(id.length == 0) throw "ID length invalid";

    return id.trim();
}

module.exports= {
    checkId
}