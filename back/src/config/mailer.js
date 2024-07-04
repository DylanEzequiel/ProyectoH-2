const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "bdiddu.games@gmail.com",
    pass: "nisb eppr xmod ggau",
  },
});

module.exports = transporter