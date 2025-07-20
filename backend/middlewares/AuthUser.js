import jwt from "jsonwebtoken"

// user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const {token} = req.headers;
        // console.log(atoken);
        if (!token) {
            return res.json({success:false, message:"Authentication token is missing"})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = token_decode.id;
        next()
    } catch (error) {
        console.log(error) 
        res.json({success:false, message:"Authentication failed"})
    }
}

export default authUser