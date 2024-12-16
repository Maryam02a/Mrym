const { Router } = require("express");
const { userRouter } = require("./user.routes");
const { blogRouter } = require("./bloge.routes");
const { commentRouter } = require("./comment.routes");

function setTime(req, res , next ) {
    req.time = Date.now();
    next()
}
const router = Router();
router.use("/user", setTime, userRouter)
router.use("/blog", setTime, blogRouter)
router.use("/comments", setTime, commentRouter)
module.exports = {
    AllRoutes:router
}