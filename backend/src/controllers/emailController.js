import sendMail from "../config/mailer.js";

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await sendMail({
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      replyTo: email,
    });

    res.status(200).json({ success: "Message sent successfully" });

  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
