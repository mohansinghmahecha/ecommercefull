const express = require("express")
expressrouter = express.Router()
const sendemail = require('../emailverification/EmailVerification')
expressrouter.post('/sendotp',sendemail.createTempuse )
module.exports = expressrouter

