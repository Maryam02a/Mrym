const { Router } = require("express");
const { getUser ,createNewUser, deleteUser, updateUser } = require("../controller/user.controller");


const router = Router();

router.get("/",getUser)
router.post("/",createNewUser)
router.delete("/",deleteUser)
router.patch("/",updateUser)

module.exports = { userRouter:router }