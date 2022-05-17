const nodemailer = require('nodemailer');

// router.post('/', (req, res) => {
    async function main(info) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
              user: "comicmarvel02@gmail.com", // generated ethereal user
              pass: "M4rvel12" // generated ethereal password
            },
        });
    let options = await transporter.sendMail({
        from: 'comicmarvel02@gmail.com', // sender address
        to: info, // list of receivers
        subject: "Welcome to Marvel Plus", // Subject line
        html: `<h1>Welcome to Marvel Plus</h1>
        <p>You are fanatic marvel now</p>` // html body
    });
    return options.messageId;
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if(error) {
    //         return (error.message);
    //     }
    //     else {
    //         console.log("Email enviado")
    //         return (req.body);
    //     }
    // })
}

module.exports = main