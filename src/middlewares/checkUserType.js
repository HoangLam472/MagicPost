// middleware/checkUserType.js

const jwt = require('jsonwebtoken');

module.exports = (requiredUserType) => {
  return (req, res, next) => {
    // Extract the user type from the JWT token
    const token = req.cookies.token; // Assuming you store the token in a cookie
    if (!token) {
      return res.redirect('/login'); // Redirect to login if no token is found
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userType = decoded.userType;

      // Check if the user has the required user type
      if (userType === requiredUserType) {
        next(); // Continue to the next middleware or route handler
      } else {
        res.status(403).send('Forbidden'); // User doesn't have the required user type
      }
    } catch (error) {
      res.status(401).redirect('/login'); // Token is invalid
    }
  };
};
