const joi = require("joi");
const LoginValidationSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(7).max(14).required(),
});
const reigisterValidationSchema =joi.object({
    email: joi.string().email().required(),
    userName:joi.string().alphanum().min(6).max(30).required(),
    password: joi.string().min(5).max(20).required(),
    confirmPassword: joi.ref('password'),
    phoneNum: joi.number().integer().min(10).max(11).required(),
});

module.exports ={
    LoginValidationSchema,
    reigisterValidationSchema
}