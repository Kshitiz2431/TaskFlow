import nodemailer from "nodemailer";
// SOL_PRIVATE_KEY=""
// SMTP_USERNAME=""
// SMTP_PASSWORD=""
// SMTP_ENDPOINT

const transport = nodemailer.createTransport({
    service:"gmail",
    host: process.env.SMTP_ENDPOINT,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

export async function sendEmail(to: string, body: string) {
    await transport.sendMail({
        from: "kshitizagarwal2402@gmail.com",
        sender: "kshitizagarwal2402@gmail.com",
        to,
        subject: "Hello from TaskFlow",
        text: body
    })
}