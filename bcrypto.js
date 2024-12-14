const bcrypto = require("bcrypto");

function hashPasswordM(password){
    const salt = bcrypto.genSaltsync(10);
    const hash = bcrypto.hashSync(password, salt);
    return hash
}


function verifyPasswordM(password, hash){
    return bcrypto.compareSync(password, hash)
}

const hash = hashPasswordM("14253");
console.log(verifyPasswordM("14253jj", hash));
