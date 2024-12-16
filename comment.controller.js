const getComment = (req, res , next) => {
    res.send("comments")
}

const createNewComment = (req, res , next) => {
    res.send("create New Comment")
}

const deleteComments = (req, res , next) => {
    res.send(`delete comment with id #${req.params.id}`)
}

const updateComments = (req, res , next ) => {
    res.send(`updated comment with id #${req.params.id}`)
}

module.exports = {
    getComment,
    createNewComment,
    deleteComments,
    updateComments
}