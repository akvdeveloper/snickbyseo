import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { name, email, contactNo, message, contactReason } = await request.json();
    // Validate input fields
    if (!name || !email || !contactNo || !message || !contactReason) {
      return new Response(
        JSON.stringify({ message: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // Configure the SMTP transporter using nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Replace with your SMTP server
      port: process.env.SMTP_PORT, // Typically 587 for TLS
      secure: false, // Set to true for port 465
      auth: {
        user: process.env.SMTP_USER, // Your email user
        pass: process.env.SMTP_PASS, // Your email password
      },
    });

    // Verify the transporter configuration
    await transporter.verify();
    console.log('SMTP transporter verified.');

    // Email content for the recipient (form owner)
    const mailOptionsToRecipient = {
      from: email, // Email from the user who submitted the form
      to: process.env.CONTACT_EMAIL, // Your email address
      subject: `New Message from ${name}`, // Subject line
      text: `
        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNo}
        Reason for Contact: ${contactReason}
        
        Message:
        ${message}
      `.trim(),
    };

    // Email content for the sender (user who filled out the form)
    const mailOptionsToSender = {
      from: process.env.SMTP_USER, // Your email address
      to: email, // User's email address
      subject: 'Contact Request - We’ll Get Back to You Soon',
      text: `
        Dear ${name},
        
        Thank you for reaching out to us! We have received your message and we’ll get back to you as soon as possible.

        Your reason for contact: ${contactReason}

        Please rest assured that our team is reviewing your inquiry and will be in touch shortly. If you have any immediate questions or need assistance, feel free to contact us directly at 8271520348.

        We appreciate your patience and look forward to connecting with you soon!

        Best regards,
        Amit Vishwakarma
        CEO, SnickBySEO
        Contact Number: 8271520348
      `.trim(),
    };

    // Send email to the recipient
    await transporter.sendMail(mailOptionsToRecipient);
    console.log('Email sent to recipient.');

    // Send email to the sender (user)
    await transporter.sendMail(mailOptionsToSender);
    console.log('Confirmation email sent to sender.');

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: 'Emails sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in POST /api/send-email:', error.message);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: error.message }),
      { status: 500 }
    );
  }
}
