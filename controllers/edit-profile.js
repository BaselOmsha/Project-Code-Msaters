const { getDay, getMonth, getYear } = require('../helpers/date-values');
const User = require('../models/User');

// edit profile page
const editPage = async (req, res) => {
    res.render('edit-profile', {
        Title: req.user.firstname + " " + req.user.lastname + " - Code Masters",
        _id: req.user._id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        dob: req.user.dob,
        day: getDay(req.user.dob),
        month2: getMonth(req.user.dob),
        year: getYear(req.user.dob),
        gender: req.user.gender,
        description: req.user.description,
        hobbies: req.user.hobbies
    });
}

const updateProfile = async (req, res) => {
    try {
        const userId = req.params._id;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const month = req.body.month;
        const day = req.body.day;
        const year = req.body.year;
        // converting to Date string
        const date = `${day}.${month}.${year}`
        const paivays = new Date(date);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = paivays.toLocaleDateString(options);
        // console.log(formattedDate);
        const gender = req.body.gender;

        if (!firstname || !lastname || !email || !formattedDate) {
            res.status(400).send(
                { msg: 'info missing' }
            )
        } else {
            const user = await User.updateOne({ _id: userId }, {
                $set: {
                    firstname: firstname, lastname: lastname, email: email,
                    dob: formattedDate, gender: gender
                }
            })
            if (user) {
                res.status(202).location("../profile").redirect("../profile");
                console.log("user added successfully")
            } else {
                res.status(400).send("something went wrong!");
            }
        }

    } catch (error) {
        console.log(error);
        res.send(" Server side error creating a user");
    }
}

module.exports = {
    editPage,
    updateProfile
};