import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
export function generateHash(text) {
    return bcrypt.hashSync(text, saltRounds, function (err, hash) {
        if (err) throw err;
        return hash
    });
}

export function compare(text, hash) {
    return bcrypt.compareSync(text, hash);
}

export function createAccessToken(payloadData, secretKey = null, exp = null) {
    const accessToken = jwt.sign(
        payloadData,
        secretKey ?? process.env.SECRET, //TODO - create a separate secret key for this
        {
            expiresIn: exp ?? 86400,
        }
    );
    return accessToken;
}