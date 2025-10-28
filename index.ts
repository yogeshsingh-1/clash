import express, { Application, Request, Response } from "express";
import "dotenv/config";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./src/config/nodemail.js";
// queue import 
import "./src/jobs/index.js"
import { emailQueue, emailQueueName } from "./src/jobs/EmailJobs.js";

const app: Application = express();
const port = process.env.PORT || 7000;

// fileURLToPath ka use ES Module (import/export) ke saath 
var __dirname = path.dirname(fileURLToPath(import.meta.url));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS view setup
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

app.get("/render", async (req: Request, res: Response) => {

  try {
    // ejs.renderFile method Dusing for get HTML file
    const html = await ejs.renderFile(`${__dirname}/src/views/emails/welcome.ejs`, { name: "Arjumand Alam" });
    // mail send
    await emailQueue.add(emailQueueName, { to: "yogesh.singh@mygstcafe.in", subject: "Testing Queue Email", body: html }); 
    return res.send("mail send succesfully");
  } catch (e) {
    console.log(e);
  }
});
app.get("/sender", async (req: Request, res: Response) => {

  try {
    const html = await ejs.renderFile(`${__dirname}/src/views/emails/welcome.ejs`, { name: "Arjumand Alam" });
    // mail send
    await sendEmail("yogesh.singh@mygstcafe.in", "Test SMTP", html);
    return res.send("mail send without bullmq succesfully");
  } catch (e) {
    console.log(e);
  }
});
app.listen(port, () => console.log(`server is running on ${port}`));