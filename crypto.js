const crypto = require("crypto");

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString;
    const newHash = `$2s${salt}.${hash}`;
    return newHash
}


function verifyPassword(password, hashPassword){
    const salt = hashPassword.split(".")?.[1];
    const hash = crypto.pbkdf2Sync(password, salt , 1000 ,64 ,"sha512").toString;
    const newHash = `$2a${salt}.${hash}`;
    return (newHash == hashPassword)
}

const hashPasswordM = hashPassword("2381");
console.log(hashPassword);

const hashedPasswordL = hashPassword("Maryam");
console.log(hashPassword);

const checkingPass = verifyPassword("2381",hashPasswordM);
console.log(checkingPass);
