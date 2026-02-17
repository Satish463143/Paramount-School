const mailService = require("../../utils/mail.service")
const Contact = require("./contact.model")

class ContactService{
    createContact = async (body) => {
        try {
            const contact = await Contact.create(body)
            return contact.save()

        } catch (error) {
            throw error
            
        }
    }
    getAllContact = async (filter,skip,limit)=>{
        try {
            const query = Contact.find(filter)
                .limit(limit)
                .skip(skip)
                .sort({createdAt:-1})
                .lean()
            
            const [count, data] = await Promise.all([
                Contact.countDocuments(filter),
                query
            ])
            return {count, data}
            
        } catch (error) {
            throw error
            
        }
    }
    sendMail = async ({name, email, subject}) => {
        if(!email || email.trim() === ""){
            console.log("Email is required")
            return null
        }
        try {
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        .container {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            max-width: 600px;
                            margin: 0 auto;
                            border: 1px solid #e0e0e0;
                            border-top: 6px solid #1976d2; /* Theme Blue */
                        }
                        .header {
                            background-color: #f8f9fa;
                            padding: 20px;
                            text-align: center;
                        }
                        .content {
                            padding: 30px;
                            color: #333333;
                            line-height: 1.6;
                        }
                        .footer {
                            background-color: #f1f1f1;
                            padding: 20px;
                            text-align: center;
                            font-size: 12px;
                            color: #777777;
                        }
                        .highlight {
                            color: #d32f2f; /* Theme Red */
                            font-weight: bold;
                        }
                        .btn {
                            display: inline-block;
                            padding: 12px 24px;
                            background-color: #1976d2;
                            color: white !important;
                            text-decoration: none;
                            border-radius: 4px;
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2 style="color: #1976d2; margin: 0;">Paramount School</h2>
                        </div>
                        <div class="content">
                            <h3>Hello ${name},</h3>
                            <p>Thank you for reaching out to us! We have received your inquiry regarding <span class="highlight">"${subject}"</span>.</p>
                            <p>Our team is currently reviewing your message and will get back to you as soon as possible. We aim to respond to all inquiries within 24-48 business hours.</p>
                            <p>In the meantime, feel free to visit our website to learn more about our academic programs and facilities.</p>
                            <a href="https://paramountschool.edu.np" class="btn">Visit Website</a>
                        </div>
                        <div class="footer">
                            <p>&copy; ${new Date().getFullYear()} Paramount School. All rights reserved.</p>
                            <p>If you didn't submit this inquiry, please ignore this email.</p>
                        </div>
                    </div>
                </body>
                </html>
            `;

            return await mailService.sendMail(
                email,
                "We've Received Your Inquiry - Paramount School",
                htmlContent
            )
        } catch (error) {
            throw error
        }
    }

    sendAdminMail = async ({name, email, subject, message, number}) => {
        const adminEmail = process.env.SMTP_FROM;      
        if (!adminEmail) {
            console.log('No admin email configured, skipping admin notification');
            return null;
        }

        try {
           return await mailService.sendMail({
            to :adminEmail,
            subject:"New Contact Inquiry - Paramount School",
            message:
            `
            <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        .container {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            max-width: 600px;
                            margin: 0 auto;
                            border: 1px solid #e0e0e0;
                            border-top: 6px solid #d32f2f; /* Theme Red */
                        }
                        .header {
                            background-color: #f8f9fa;
                            padding: 20px;
                            text-align: left;
                        }
                        .content {
                            padding: 30px;
                            color: #333333;
                            line-height: 1.6;
                        }
                        .detail-row {
                            margin-bottom: 10px;
                            border-bottom: 1px padding: 5px 0;
                        }
                        .label {
                            font-weight: bold;
                            color: #1976d2; /* Theme Blue */
                            width: 120px;
                            display: inline-block;
                        }
                        .message-box {
                            background-color: #f9f9f9;
                            border-left: 4px solid #d32f2f;
                            padding: 15px;
                            margin-top: 15px;
                            white-space: pre-wrap;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2 style="color: #d32f2f; margin: 0;">New Contact Inquiry</h2>
                        </div>
                        <div class="content">
                            <p>A new message has been submitted through the website contact form:</p>
                            
                            <div class="detail-row">
                                <span class="label">Name:</span> ${name}
                            </div>
                            <div class="detail-row">
                                <span class="label">Email:</span> ${email}
                            </div>
                            <div class="detail-row">
                                <span class="label">Phone:</span> ${number}
                            </div>
                            <div class="detail-row">
                                <span class="label">Subject:</span> ${subject}
                            </div>
                            
                            <div class="label">Message:</div>
                            <div class="message-box">${message}</div>
                        </div>
                    </div>
                </body>
                </html>
            `
        })
        } catch (error) {
            throw error
        }
    }

}
module.exports = new ContactService()