import nodemailer from "nodemailer";

const HOST = process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.gmail.com";
const PORT = parseInt(process.env.SMTP_PORT || process.env.EMAIL_PORT || "587", 10);
const USER = process.env.SMTP_USER || process.env.EMAIL_USER;
const PASS = process.env.SMTP_PASS || process.env.EMAIL_PASS;
const RECEIVER = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: PORT === 465, // true for 465, false for other ports
  auth: {
    user: USER,
    pass: PASS,
  },
});

const sendMail = async ({ subject, html, replyTo }) => {
  return transporter.sendMail({
    from: `"Website Contact" <${USER}>`,
    to: RECEIVER,
    subject,
    html,
    replyTo,
  });
};

export default sendMail;
