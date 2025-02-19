const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const emailRouter = express.Router();

// Configure Multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

emailRouter.post(
  "/send-application",
  upload.single("resume"),
  async (req, res) => {
    try {
      const { name, email, degree, passoutYear, jobTitle } = req.body;
      const resume = req.file;

      // Email transporter setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email message setup
      const mailOptions = {
        from: email,
        to: "faiyadhussain2001@gmail.com", // HR email
        subject: `Job Application for ${jobTitle} - ${name}`,
        text: `Dear HR,\n\nYou have received a new job application.\n\nName: ${name}\nEmail: ${email}\nDegree: ${degree}\nPassout Year: ${passoutYear}\n\nResume is attached.\n\nBest Regards,\n${name}`,
        replyTo: email,
        attachments: [
          {
            filename: resume.originalname,
            content: resume.buffer,
          },
        ],
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Application sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  }
);

module.exports = emailRouter;
