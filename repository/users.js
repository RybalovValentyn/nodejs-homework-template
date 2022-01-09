import User from "../modal/user.js";

const findById = async (id) =>{
return await User.findById(id)
};
const findByEmail = async (email) =>{
    // console.log('findByEmail', email);
    return await User.findOne({email})
    };

const create = async (body) =>{
    // console.log('create', body);
    const user = new User(body);
    // console.log('create', user);
    return await user.save()

}
const updateToken = async (id, token) =>{
    return await User.updateOne({_id: id}, {token})
}

export default {
    findById, 
    findByEmail, create, 
    updateToken
}