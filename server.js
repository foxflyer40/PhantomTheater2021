//---------------------------- imports/server set-up --------------------------//
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

//-------------------------------- middleware------------------------------//
app.use(express.static(path.resolve("./client/public")));
//middleware for email alert
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/admin', (req, res) => {
//    res.sendFile(path.resolve('/index/admin'))
// } )

// app.get('/artist')

// path home
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public"));
});

//--------------------email sending functionality---------------------//
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "whitney.damore@ethereal.email",
    pass: "XphNJwxnDSSYhQ1TA7",
  },
});

//verify connection config
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server ready to take messages");
  }
});

//establish route for sending email + stores input values in variables
app.post("/send", (req, res) => {
  console.log(req.body);
  let artist = req.body.artist;
  let email = req.body.email;
  let phone = req.body.phone;
  let description = req.body.description;


//e-mail body template
  let mailBody = `Artist Name: ${artist}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`;

//structure of e-mail sent 
  let sentMsg = {
    from: artist,
    to: "bschussid@aol.com",
    subject: "You have a new show proposal!",
    text: mailBody,
  };


//e-mail send function + error handling
  transporter.sendMail(sentMsg, (err, info) => {
    if (err) {
      console.log("Error occurred: " + err.message);
      res.json({ message: "something went wrong" });
    }
    res.json({
      message: "message has been sent",
    });
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Message sent: %s", info.messageId);
  });
});

// start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
