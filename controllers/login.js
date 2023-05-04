//home/root loggin page
const home = async (req, res) => {
    res.render('logIn', {
        Title: "Login Page - Code Masters",
        // errors: "Invalid username or password",
        messages: req.flash('error'),
        // page_title: "Library",
        // content: data
    });
}


// If user not authenticated take back to login page
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("../");
    }
}

// If user authenticated keep on logged
const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("../profile");
    }
    next();
}

const logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('../');
    });;
};
/*
//new password
const newpassword = (req,res, next) => {
    if (req.newpassword()) {
        return res.redirect("../newpassword");
    }
    else {
        res.redirect("../");
    }
};
*/
module.exports = {
    home,
    isAuthenticated,
    checkNotAuthenticated,
    logout
    //newpassword
};