import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const requestData = await req.json();

    const { name, email, message } = requestData;

    // Create a transporter using SMTP details
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "racheltb123@gmail.com",
        pass: "lxphgpfdzxgnsvsj",
      },
    });

    const mailOptions = {
      from: "racheltb123@gmail.com",
      to: email,
      subject: "New Contact Message",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // console.log("Email sent:", info.response);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error sending an email, please try again",
      },
      {
        status: 500,
      }
    );
  }
}
