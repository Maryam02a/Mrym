const getUser = (req, res , next) => {
    res.send("users")
}

const createNewUser = (req, res , next) => {
    res.send("create New User")
}

const deleteUser = (req, res , next) => {
    res.send("delete User")
}

const updateUser = (req, res , next ) => {
    res.send("update User")
}


module.exports = {
    getUser,
    createNewUser,
    deleteUser,
    updateUser
}