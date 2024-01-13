import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: "cipherinvoice@protonmail.com",
    pass: "B4D7472CCAA09BEEC82DD83544B6C93B141C",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log(error);
    console.log("Server is ready to take our messages");
  }
});

var mailOptions = {
  from: '"Example Team" <cipherinvoice@protonmail.com>',
  to: "goxov10333@vkdfgdfr1.com",
  subject: "Nice Nodemailer test",
  text: "Hey there, it’s our first message sent with Nodemailer 😉 ",
  html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
