import jwt from "jsonwebtoken"

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        const {dtoken} = req.headers;
        // console.log(atoken);
        if (!dtoken) {
            return res.json({success:false, message:"Authentication token is missing"})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.docId = token_decode.id;
        next()
    } catch (error) {
        console.log(error) 
        res.json({success:false, message:"Authentication failed"})
    }
}

export default authDoctor