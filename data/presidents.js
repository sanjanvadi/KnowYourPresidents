const { ObjectId } = require('mongodb');
const mongoCollections = require('../config/mongoCollections');
const helper = require('../helpers');
const presidents = mongoCollections.presidents;
const users = mongoCollections.users
const bcrypt = require('bcryptjs');

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

const login = async (emailId, password) => {

    emailId = emailId.trim().toLowerCase();
    password = password.trim();

    const userCollection = await users();
    const user = await userCollection.findOne({
      emailId: emailId
    });
    if(user===null){
      throw "Either the email or password is invalid";
    }

    let compare = await bcrypt.compare(password, user.password);
    if(!compare){
      throw "Either the email or password is invalid";
    }
    
    return user;

  };

const createUser = async (emailId, password, firstName, lastName) => {

    emailId = emailId.trim().toLowerCase();
    password = password.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();

    const userCollection = await users();
    const user = await userCollection.findOne({
      emailId: emailId
    });

    if(user!=null){
      if(user.emailId.toLowerCase()===emailId){
        throw "user with that email already exists";
      }
    }

    const saltRounds = 10;
    let hash = await bcrypt.hash(password, saltRounds);
    
    let newUser={
      emailId:emailId,
      password:hash,
      firstName:firstName,
      lastName:lastName
    }

    const insertInfo = await userCollection.insertOne(newUser);
      if (!insertInfo.acknowledged || !insertInfo.insertedId){
        throw 'Error : Could not add owner';
      }

    return newUser;
  };

module.exports={
    getAllPresidents,
    getPresident,
    login,
    createUser
}