const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const puppeteer = require("puppeteer");
const template = require("./template");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("PDF Generator for the CV application created by aayushmau5");
});

app.post("/generate-pdf", async (req, res, next) => {
  const htmlTemplate = template(req.body);
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.emulateMediaType("screen");
    await page.setContent(htmlTemplate);
    await page.pdf({
      path: "mypdf.pdf",
      format: "A4",
      printBackground: true,
    });

    console.log("done");
    await browser.close();

    res.send(Promise.resolve());
  } catch (err) {
    res.send(Promise.reject("Error Generating PDF"));
  }
});

app.get("/get-pdf", (req, res, next) => {
  res.sendFile(`${__dirname}/mypdf.pdf`);
});

app.listen(5000, () => console.log("Listening on port 5000"));
