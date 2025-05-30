import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'williamjordan@time-ai.agency',
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Email template for professional appearance
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #000000; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; color: #cccccc;">williamjordan.io</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Name:</strong>
            <p style="margin: 5px 0; color: #666;">${data.name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Email:</strong>
            <p style="margin: 5px 0; color: #666;"><a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a></p>
          </div>
          
          ${data.company ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Company:</strong>
            <p style="margin: 5px 0; color: #666;">${data.company}</p>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #333;">Message:</strong>
            <div style="margin: 10px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #000000; color: #333;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This email was sent from the contact form on williamjordan.io</p>
            <p>Sent on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;

    const textTemplate = `
New Contact Form Submission from williamjordan.io

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}

Message:
${data.message}

---
Sent on: ${new Date().toLocaleString()}
    `;

    // Send email
    const info = await transporter.sendMail({
      from: '"William Jordan Website" <williamjordan@time-ai.agency>',
      to: 'williamjordan@time-ai.agency',
      subject: `New Contact Form Submission from ${data.name}`,
      text: textTemplate,
      html: htmlTemplate,
      replyTo: data.email
    });

    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}