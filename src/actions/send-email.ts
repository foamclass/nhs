import nodemailer from "nodemailer";

export async function sendContactEmail({ name, email, phone, investorType, message, newsletter }) {
  // Configure your SMTP transporter (use environment variables for real credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, // e.g. your Gmail address
      pass: process.env.SMTP_PASS, // app password or real password
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "ansarulhaq.dev@gmail.com",
    subject: "NHS",
    text: `New NHS Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInvestor Type: ${investorType}\nNewsletter: ${newsletter ? "Yes" : "No"}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
}
