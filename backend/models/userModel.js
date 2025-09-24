const bcrypt = require('bcrypt');
const validator =  require('validator');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

// static user signup

userSchema.statics.signup = async function(email, password) {
    
    // validation of criterias
    if(!email || !password){
        throw Error('please all fields must be filled')
    }

    if(!validator.isEmail( email )){
        throw Error('this is not an email, please enter a valid email');
    }

    if(!validator.isStrongPassword( password )){
        throw Error('the password must have atleast upper case, low case, number, special character (eg. @, $), and should be atleast eight characters long');
    }

    
    const exists = await this.findOne({ email });

    if(exists){
        throw Error('email already exists');
    }

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    // store the data to the database

    const user = await this.create({email, password: hash});

    return user;

}

module.exports = mongoose.model('user', userSchema);