import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  
  // Create an HTML table for the email body
  let emailBody = `
    <html>
      <body>
        <table border="1" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <th style="text-align: left; padding: 8px;">Field</th>
            <th style="text-align: left; padding: 8px;">Value</th>
          </tr>
  `;
  
  for (let [key, value] of data.entries()) {
    emailBody += `
      <tr>
        <td style="padding: 8px;">${key.charAt(0).toUpperCase() + key.slice(1)}</td>
        <td style="padding: 8px;">${value}</td>
      </tr>
    `;
  }
  
  emailBody += `
        </table>
      </body>
    </html>
  `;

  const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: import.meta.env.SMTP_PORT,
    secure: import.meta.env.SMTP_SECURE,
    auth: {
      user: import.meta.env.SMTP_USER,
      pass: import.meta.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: "The Website Guy <autobot@thewebsiteguy.uk>",
    to: "Recipient Name <patrick@thewebsiteguy.uk>",
    subject: "New Contact Form Submission",
    html: emailBody, // Send the email body as HTML
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Success! Your message has been sent.", name: data.get("name") }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error sending email: ", error);
    return new Response(
      JSON.stringify({ message: "Error sending email. Please try again later." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
