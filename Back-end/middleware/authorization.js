const jwt = require("jsonwebtoken");
require("dotenv").config();

// This middleware will only continue if the token is present in the request headers

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if no token
  if (!token) {
    return res.status(403).json({ msg: "Authorization denied" });
  }

  // Verify token
  try {
    const verified = jwt.verify(token, process.env.jwtSecret);

    req.user = verified.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
