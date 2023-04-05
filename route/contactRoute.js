const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Tutti i campi sono richiesti" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "nicolacaddeo.dev@gmail.com",
      pass: "vmdjkfeclwyygwko",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "nicolacaddeo.dev@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
        <h3>Informazioni</h3>
        <ul>
            <li>Nome: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>
        <h3>Messaggio</h3>
        <p>${data.message}</p>
      `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Si prega di riempire tutti i campi" });
      res.status(200).json({ msg: "Grazie per avermi contattato!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "Errore del server" });
    }
  });
});
module.exports = router;
