import crypto from 'crypto';
const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log("Your JWT Secret is:", jwtSecret);
