// const { Router } = require("express");
// const nodemailer = require('nodemailer');
// const router = Router();

// router.get('/', (req, res) => {
//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//         user: "comicmarvel12@gmail.com", // generated ethereal user
//         pass: "M4rvel12" // generated ethereal password
//         }
//     })

//     let info = transporter.sendMail({
//         from: 'comicmarvel12@gmail.com', // sender address
//         to: user, // list of receivers
//         subject: subject, // Subject line
//         // text: 'Thank you for subscribe on Marvel Plus!', // plain text body
//         html:  `<div style="color:black;text-align:center">
//         <div style='background-color:red;background-image:linear-gradient(to left, #fdaa48, #f2ab15);font-weight:normal;padding:20px;color:black;text-align:center'>
//             <img src='https://i.all3dp.com/workers/images/fit=cover,w=1000,gravity=0.5x0.5,format=auto/wp-content/uploads/2020/01/16171824/7ea4a177d8db8d9f8fd2065c096863ce_display_large.jpg' alt='Wave Music' />
//         </div>
//         <h1 style='color:#6f6f6f'>Welcome to Marvel Plus</h1>
//         <img style='margin:20px;width:30%' src='<img src="https://i.all3dp.com/workers/images/fit=cover,w=1000,gravity=0.5x0.5,format=auto/wp-content/uploads/2020/01/16171824/7ea4a177d8db8d9f8fd2065c096863ce_display_large.jpg" alt="thanks!" />' alt='' />
//         `
//     },
//     (err) => {
//         if(err) res.status(200).send({ success: false, error: err});
//         return res.status(200).send({
//             success: true,
//             message: 'email sent'
//         })
//     });
    
//     console.log("Message sent: %s", info.messageId);
//       // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
//       // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// })



// module.exports = router;