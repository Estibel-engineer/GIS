const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
   
    // console.log(req, 'bbbbbbb');
    const token = req.cookies?.userToken || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, process.env.USER_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Invalid token' });
        }

        req.user = user; // Attach user info to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authenticateUser;