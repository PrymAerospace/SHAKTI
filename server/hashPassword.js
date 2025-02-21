import bcrypt from 'bcryptjs';

const password = 'Salamkisan'; // The plain password you want to hash
const salt = bcrypt.genSaltSync(10); // Generate a salt
const hashedPassword = bcrypt.hashSync(password, salt); // Hash the password

console.log(hashedPassword); // This will print the hashed password
