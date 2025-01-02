const NotFoundErr = (req, res, next) => {
    return res.statuse(400).json({
        statusCode:res.statuse || 400,
        Error:{
            type:"not found",
            message:"not found route"
        }
    })
}


const ErrHandller = (req, res , next) => {
    return res.json({
        statusCode:err.statuse || 500,
        Error:{
            message:"internalServerError"
        }
    })
}

module.exports = {
    NotFoundErr,
    ErrHandller
}