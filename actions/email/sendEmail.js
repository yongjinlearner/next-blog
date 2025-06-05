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

const emailList = async () => {
    await dbConnect()
    try {
        const users = await User.find({ confirmed: true }).select('email');
        return users.map(user => user.email);
    } catch (err) {
        console.error("Could not fetch emails:", err);
        return [];
    }
};

const sendEmail = async (subject, text) => {
    const mySubscribers = await emailList()
    console.log("subscribers: ", mySubscribers)
    const info = await transporter.sendMail({
        from: process.env.EMAIL,
        bcc: mySubscribers,
        subject: subject,
        text: text,
        html: text + " Click <a href='localhost:3000/blog'>HERE</a> to check out the new blog"
    });

    console.log("Message has been sent");
}

export default sendEmail;