import nodemailer from 'nodemailer'
import User from '@/schema/User'
import dbConnect from '@/lib/database'

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SECURITY === 'true',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    },
});

const sendAuthEmail = async (email) => {
    console.log("sending email to", email)
    await dbConnect()
    let user = ''
    try {
        user = await User.find({ email: email })
        console.log("user found", user)
    } catch (err) {
        console.error("Could not fetch emails:", err);
    }

    const userId = user[0].id
    console.log("userId", userId)
    const confirmationURL = `http://tinyurl.com/yongjinlee/confirm-email?token=${userId}`

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Yongjin's blog: confirm your email address",
            html: `Click <a href="${confirmationURL}">HERE</a> to confirm your email address`
        });
        console.log("email has been sent")
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export default sendAuthEmail;