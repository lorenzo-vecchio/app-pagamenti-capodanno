import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import { EmailTemplate, renderMJML, type TemplateVariables } from './mjmlRenderer';
import path from 'path';

class EmailService {

    private transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;
    private senderEmailAddress: string;

    constructor(emailConfig: EmailConfig) {
        this.transporter = nodemailer.createTransport(emailConfig);
        this.senderEmailAddress = process.env.EMAIL_USER;
    }

    async sendEmail(mailOptions: MailOptions) {
        return await this.transporter.sendMail(mailOptions);
    }

    async sendTemplateEmail<T extends EmailTemplate>(
        template: T,
        templateParams: TemplateVariables[T],
        to: string,
        subject: string,
        attachments?: EmailAttachment[]
    ) : Promise<SMTPTransport.SentMessageInfo> {
        const htmlEmailContent = renderMJML(template, templateParams);
        const info = this.sendEmail({
            from: this.senderEmailAddress,
            to,
            subject,
            html: htmlEmailContent,
            attachments
        })
        return info;
    }

    async sendConfirmationSingle(
        to: string,
        subject: string,
        params: TemplateVariables[EmailTemplate.ConfirmationSingle]
    ) : Promise<SMTPTransport.SentMessageInfo> {
        const imagePath = path.resolve('src/lib/assets/images/logo.png');
        const attachment: EmailAttachment = {
            filename: 'logo.png',
            path: imagePath,
            cid: 'logo'
        } 
        const info = this.sendTemplateEmail(
            EmailTemplate.ConfirmationSingle,
            params,
            to,
            subject,
            [attachment]
        )
        return info;
    }

}

export const emailServiceProvider = () => {
    const emailConfig: EmailConfig = {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    }
    return new EmailService(emailConfig)
}