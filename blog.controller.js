class BlogController {
    getBlog(req, res , next) {
        res.send("list of blogs")
    }
    createNewBlog(req, res next){
        res.send("create New blog")
    }
    deleteBlog(req, res ,next) {
        res.send("delete Blog")
    }
    updateBlog(req, res ,next){
        res.send("update blog")
    }
}
module.exports = BlogController