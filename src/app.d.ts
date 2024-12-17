// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Attachment } from "nodemailer/lib/mailer"

// for information about these interfaces
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      EMAIL_USER: string;
      EMAIL_PASSWORD: string;
      EMAIL_PORT: number;
      EMAIL_HOST: string
    }
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
  type EmailConfigAuth = {
    user: string,
    pass: string
  }
  type EmailConfig = {
    host: string,
    port: number,
    secure: boolean,
    auth: EmailConfigAuth
  }
  type MailOptions = {
    from: string,
    to: string,
    subject: string,
    html: string,
    attachments?: Attachment[]
  }
  type EmailAttachment = {
    filename: string,
    path: string,
    cid?: string
  }
}

export {};
