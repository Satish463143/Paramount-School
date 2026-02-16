const jwt = require("jsonwebtoken");

const loginCheck = (req, res, next) => {
    try {
        let token = req.headers['authorization'] || null;

        if (!token) {
            throw { status: 401, message: "Unauthorized access: token not provided" }
        }

        // Handle Bearer prefix if present
        if (token.startsWith('Bearer ')) {
            token = token.split(' ')[1];
        }

        const data = jwt.verify(token, process.env.JWT_SECRET)
        
        // Attach user ID to request
        req.user_id = data.sub;

        next();
    } catch (exception) {
        console.log(exception)
        next({ status: exception.status || 401, message: exception.message || "Unauthorized" })
    }
}

module.exports = loginCheck;