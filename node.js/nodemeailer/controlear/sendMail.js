const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
  // let testAccount =await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "cierra.hartmann34@ethereal.email",
      pass: "eEKbDMfF8WY1tCnhqw",
    },
  });

  const info = await transporter.sendMail({
    from: '"cierra.hartmann34@ethereal.email" <miraj@5868>', // sender address
    to: "mirajpatel752@gmail.com", // list of receivers
    subject: "Hello Miraj✔", // Subject line
    text: "Hell bhanderi", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};

module.exports = sendMail;
