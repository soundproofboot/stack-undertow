// middleware to check if a user is logged in before allowing certain api calls
function withAuth (req, res, next) {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
}

module.exports = withAuth;