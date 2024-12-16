const express = require("express");
const { AllRoutes } = require("./routers")
const app = express();
app.use(AllRoutes)

app.listen(3000, () => {
    console.log("http://localhost:3000");
})