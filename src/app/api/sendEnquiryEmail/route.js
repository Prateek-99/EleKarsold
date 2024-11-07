import nodemailer from "nodemailer";

export async function POST(req) {
  const { tripType, name, mobile, email, dateTime, pickup, dropoff } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "hostinger",
    port: 465,
    host: "smtp.hostinger.com",
    secure: true,
    auth: {
      user: "info@elekarscab.com",
      pass: "Elekars@6608",
    },
  });

  const mailData = {
    from: "info@elekarscab.com",
    to: "info@elekarscab.com",
    subject: `Booking Enquiry`,
    html: `
      <div>
        <p><strong>Trip Type:</strong> ${tripType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile No.:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date & Time of Journey:</strong> ${dateTime}</p>
        <p><strong>Pickup Location:</strong> ${pickup}</p>
        <p><strong>Dropoff Location:</strong> ${dropoff}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    return new Response(JSON.stringify({ status: true, message: "Enquiry Sent Successfully" }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ status: false, message: "Issue in sending mail", error: err }), { status: 500 });
  }
}
