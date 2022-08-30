const User = require('../models/user');
module.exports.profile_get = async (req, res) => {
  return res.render('profile/profile');
};

module.exports.profile_put = async (req, res) => {
  if (!req.body.lastname || !req.body.firstname) {
    req.flash('error_msg', "Firt Name or Last Name is missing");
    return res.redirect('/admin/profile');
  }

  await User.findByIdAndUpdate(req.user._id, { firstname:req.body.firstname, lastname:req.body.lastname });
  req.flash('success_msg', 'Profile Updated');
  return res.redirect('/admin/profile');
};

module.exports.change_password_get = async (req, res) => {
  return res.render('profile/change_password');
};

module.exports.change_password_put = async (req, res) => {
  const password1 = req.body.password1 ? req.body.password1.trim() : '';
  const password2 = req.body.password2 ? req.body.password2.trim() : '';

  if (password1 == '' || password2 == '') {
    req.flash('error_msg', 'Please provide a new password and confirm password');
    return res.redirect('/admin/profile/change-password');
  }

  if (password1 !== password2) {
    req.flash('error_msg', 'Passwords do not match');
    return res.redirect('/admin/profile/change-password');
  }

  await User.findByIdAndUpdate(req.user._id, { password: password1 });
  req.flash('success_msg', 'Password Changed');
  return res.redirect('/admin/profile/change-password');
};
