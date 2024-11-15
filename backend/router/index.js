const express = require("express")
expressrouter = express.Router()
const sendemail = require('../emailverification/EmailVerification')
expressrouter.post('/sendotp',sendemail.createTempuse )
expressrouter.post('/verifyotp',sendemail.findUsers);
module.exports = expressrouter






