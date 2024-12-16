import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

class EmailService {

    private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>

    constructor(emailConfig: EmailConfig) {
        this.transporter = nodemailer.createTransport(emailConfig);
    }

    async sendEmail(mailOptions: MailOptions) {
        await this.transporter.sendMail(mailOptions);
    }

}