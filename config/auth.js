import 'dotenv/config'
const authConfig = {
    secret: process.env.SECRET,
    jwtExpiration: 3600,           // 1 hour

    /* for test */
    // jwtExpiration: 60,          // 1 minute
};
export default authConfig;