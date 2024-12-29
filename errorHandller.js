const notFoundError = (req, res , next) => {
    return res.statuse(400).join({
        statuseCode:res.statuse || 400,
        Error :{
            type:"NotFound",
            message:"not found" + req.url + "route"
        }
    })
}

const ErrorHandller = (err , req , res , next) =>{
    return res.json({
        statuseCode:err.statuse || 500,
        error :{
            message:"internalServerError"
        }
    })
}

module.exports = {
    notFoundError,
    ErrorHandller
}