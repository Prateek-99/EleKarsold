import nodemailer from "nodemailer";
import twilio from "twilio";

// Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const whatsappNumber = "whatsapp:+6392063669"; // Your WhatsApp number

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, mobileNumber, journeyDateTime, locationFrom, locationTo, tripType } = req.body;

    try {
      // Send WhatsApp message
      await client.messages.create({
        body: `New enquiry from ${name}. Journey from ${locationFrom} to ${locationTo} on ${journeyDateTime}. Contact: ${mobileNumber}. Trip type: ${tripType}.`,
        from: "whatsapp:+14155238886", // Your Twilio WhatsApp sandbox number
        to: whatsappNumber,
      });

      // Send email
      await transporter.sendMail({
        from: '"Enquiry Form" <your-email@gmail.com>', // Your email address
        to: "<Recipient@email.com>", // Recipient's email address
        subject: "New Enquiry Form Submission",
        text: `New enquiry from ${name}.\n\nMobile: ${mobileNumber}\nJourney Date & Time: ${journeyDateTime}\nFrom: ${locationFrom}\nTo: ${locationTo}\nTrip Type: ${tripType}`,
      });

      res.status(200).json({ message: "Enquiry submitted successfully!" });
    } catch (error) {
      console.error("Error sending enquiry:", error);
      res.status(500).json({ message: "Failed to send enquiry." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
