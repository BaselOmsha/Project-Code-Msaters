const User = require('./models/User');
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ObjectId = require('mongodb').ObjectId;

const dbURI = 'mongodb+srv://' + process.env.DBUSER + ':' + process.env.DBPASSWD + '' + process.env.CLUSTER + '.mongodb.net/' + process.env.DB + '?retryWrites=true&w=majority';

(async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Database connected");

        // const getUserInfo = async (email) => {
        //     const user = await User.findOne({ email: email }, { _id: 0, email: 1, password: 1 });
        //     console.log("\n" + "username: " + user.email + "\n" + "paswd: " + user.password)
        //     // const id = await User.findOne({ _id: id }, { _id: 0, _id: 1 })._id
        //     // console.log(id);
        //     return "\n" + "username: " + user.email + "\n" + "paswd: ";
        // }
        // const validatePassword = async (hashedPaswd, passowrd) => {
        //     try {
        //         const verify = await bcrypt.compare(passowrd, hashedPaswd)
        //         console.log("Passwords match: " + verify);


        //         return "Passwords match: " + verify;

        //     } catch (error) {
        //         console.log("Error hashing paswd" + error);
        //     }
        // }

        const ObjectId = require('mongodb').ObjectId;

        const id = async (id) => {
            const o_id = new ObjectId(id);
            const secondUser = await User.findOne({ _id: o_id });
            console.log(secondUser);
          };
        const id2 = '$2b$14$m0ZTiha6CTVERPe4HZk5ZOXLlQcgvB.dNKaRlZqvU352VFrR7u5mG';
        const u = 'testi@testi.com';
        // getUserInfo(u);
        // validatePassword('$2b$14$dCE0ZgNbj8jHfEcLsnIXle7pFweDoKFEIprC1SgWhBtNeDlvqIMni', 'Test23456!')
        id("644ea3518595489b0922cdf6");
    } catch (error) {
        console.log(error);
    }
})();