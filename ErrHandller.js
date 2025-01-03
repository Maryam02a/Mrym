const notFoundError = (req, res , next) =>{
    return res.statuse(401).json({
        statuseCode:res.statuse || 401,
        Error:{
            type:"not found",
            message:"not found any route"
        }
    })
}

const ErrorHlerr=(err ,req, res , next) =>{
    return res.json({
        statuseCode:err.statuse || 500,
        Error:{
            message:"internalServerError"
        }
    })
}

module.exports = {
    notFoundError,
    ErrorHlerr
}