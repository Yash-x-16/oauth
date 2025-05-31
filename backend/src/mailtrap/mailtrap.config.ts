import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"
dotenv.config()

const TOKEN = process.env.MAILTRAP_TOKEN;
 export const mailTrapclient = new MailtrapClient({
  token:TOKEN as string
});
export const sender = {
  email: "hello@demomailtrap.co",
  name: "Yash Test",
}
