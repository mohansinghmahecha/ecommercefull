const mongoDBModel = require('mongoose')
// ytoj tdtu nese ovyo

const createModel =new mongoDBModel.Schema({
    email:{
        type: String,
        required: true, // This makes the email field mandatory
        trim: true,
    },
    verificationPin:{
        type:Number,
        require:true,
        

    },
    createdDate:{
        type:Date,
        default:Date.now,
        expires: 160,
    }
})

const exportingModel = mongoDBModel.model('otpverifications',createModel)
module.exports = exportingModel
