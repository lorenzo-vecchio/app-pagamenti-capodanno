// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
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
    html: string
  }
}

export {};
