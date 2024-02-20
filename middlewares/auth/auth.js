import bcrypt from "bcrypt";
const saltRounds = 10;
function generateHash(text) {
    return bcrypt.hashSync(text, saltRounds, function (err, hash) {
        if (err) throw err;
        return hash
    });
}

function compare(text, hash) {
    return bcrypt.compareSync(text, hash);
}

export default generateHash