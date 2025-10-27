import nodemailer from "nodemailer";
import "dotenv/config";
// Email bhejane ke liye mail server se connection bnana using createTransport fnc
const transporter = nodemailer.createTransport({
  // host: process.env.SMTP_HOST,
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

// mail send karne ke liye fnc
export const sendEmail = async (to: string, subject: string, body: string) => {
  const info = await transporter.sendMail({
    from: process.env.SMTP_SENDER_EMAIL,
    to: to,
    subject: subject,
    // text: "Hello world?", // plain‑text body
    html: body, // HTML body
  });

  console.log("Message sent:", info.messageId);
};
