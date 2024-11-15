const exportingModel = require('../models/MongooseModel')

const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


const createTempuse = async (req, res) => {
    console.log("Creating temp user");
    const { email } = req.body;
    console.log("Email is:", email);

    try {
        // Generate a random 6-digit PIN
        const verificationPin = Math.floor(100000 + Math.random() * 900000);
        console.log(verificationPin)

        const emailTempInstance = new exportingModel({ email, verificationPin });
        await emailTempInstance.save();


       
        //    const mailOptions = {
        //     from:  process.env.EMAIL_USER, // Sender's email address
        //     to: email, // Recipient's email address
        //     subject: 'Your Verification PIN',
        //     html: `
        //     <html>
        //       <body>
        //         <img src="cid:verification_image" alt="Verification Image" style="max-width: 100%; height: auto;"/>
        
        //         <h1 style="color: red;">Code Verification</h1>
        
        //         <p>Your verification code is: <strong>${verificationPin}</strong></p>
        
        //         <p>This PIN will expire in 2 minutes.</p>
        //       </body>
        //     </html>
        //   `, // HTML body
        //   attachments: [
        //     {
        //       filename: 'verification_image.jpg', // Name the file
        //       path: 'https://fastly.picsum.photos/id/764/536/354.jpg?hmac=tUClndcsRR7YYrBLrohEXgy_1dVqdKAzhNf4fCyN1O0', // Local path or URL to the image
        //       cid: 'verification_image', // Unique identifier for the image
        //     },
        //   ],
        // };

        // // Send the email
        // await transporter.sendMail(mailOptions);

        return res.status(200).json(emailTempInstance);
    } catch (error) {
        res.status(500).json({ message: 'Error saving email', error: error.message });
    }
};

const findUsers = async (req, res) => {
  const { email, verificationPin } = req.body;
   try {
      const user = await exportingModel.findOne({ email, verificationPin });
      if (user) {
          console.log("User found with OTP:", verificationPin); // Logging the OTP instead
          res.json({ success: true, message: "OTP verified successfully!" });
      } else {
          res.status(400).json({ success: false, message: "Invalid OTP or email." });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
  }
};
module.exports = {createTempuse,findUsers}