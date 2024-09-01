import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL_ID,
    pass: process.env.NODEMAILER_EMAIL_PASSWORD,
  },
});

// Function to send email
export async function POST(req) {
  const data = await req.json();
  const { name, message, email } = data;
  console.log(name, message, email);
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}@gmail.com>`, // sender address
      to: "RizviAhmedAbbas313@gmail.com", // list of receivers
      subject: "Someone Contacted You About the Solar Project", // Subject line
    //   text: "Hello world?", // plain text body
      html: `
      <h1>Message: </h1>
      <p>${message}<p>`, // html body
    });

    return NextResponse.json(
      { message: "Message sent:" },
      { messageId: info.messageId },
      { status: 200 }
    );
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@gmail.com>
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending email check server logs" },
      { status: 500 }
    );
  }
}
