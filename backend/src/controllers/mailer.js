const nodemailer = require('nodemailer');

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
        // const filePath = path.join('mailPlantilla', '../views/welcome.html');
        // const content= fs.readFileSync(filePath, 'utf8')
    let options = await transporter.sendMail({
        from: 'comicmarvel02@gmail.com', // sender address
        to: info, // list of receivers
        subject: "Welcome to Marvel Plus",
        // Subject line
        html: `<div class="es-wrapper-color" style="background-color:#333333"><!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#333333"></v:fill>
        </v:background>
    <![endif]--> 
<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#333333"> 
 <tr> 
  <td valign="top" style="padding:0;Margin:0"> 
   <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
     <tr> 
      <td align="center" style="padding:0;Margin:0"> 
       <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:570px"> 
         <tr> 
          <td align="left" style="Margin:0;padding-top:15px;padding-bottom:20px;padding-left:20px;padding-right:20px"> 
           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wibhow.stripocdn.email/content/guids/89f07a6f-5241-4a02-8fc0-9c50b5890351/images/unnamed_1.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="530"></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
     <tr> 
      <td align="center" style="padding:0;Margin:0"> 
       <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:570px"> 
         <tr> 
          <td align="left" bgcolor="#F9ED2E" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#f9ed2e"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" height="0" style="padding:0;Margin:0"></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
         <tr> 
          <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px"> 
           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td align="center" valign="top" style="padding:0;Margin:0;width:530px"> 
               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr class="es-visible-simple-html-only"> 
                  <td align="center" style="padding:0;Margin:0;padding-left:15px;padding-right:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:32px;color:#333333;font-size:16px">You've successfully taken the first step of your origin story within the Marvel Universe! You're now powered up with a Marvel account, your key to accessing Marvel.com, Marvel Insider, Marvel Unlimited, and more!</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:32px;color:#333333;font-size:16px">To complete your registration, just click below to confirm your email!</p></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
     <tr> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:570px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
         <tr> 
          <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px"> 
           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td align="center" valign="top" style="padding:0;Margin:0;width:530px"> 
               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:24px;color:#333333;font-size:16px"><strong>About Your Marvel Account</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:24px;color:#333333;font-size:16px">Your new Marvel Account can be used to sign in across The Marvel Plus&nbsp;of Companies, including ABC, ESPN, and more.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:24px;color:#333333;font-size:16px"><b>Your Country</b>: Argentina</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:24px;color:#333333;font-size:16px">You may change this setting by updating your account.</p></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
     <tr> 
      <td align="center" style="padding:0;Margin:0"> 
       <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:570px" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF"> 
         <tr> 
          <td align="left" bgcolor="#ffffff" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#ffffff"> 
           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td align="center" valign="top" style="padding:0;Margin:0;width:530px"> 
               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:21px;color:#333333;font-size:14px">Thank you for creating a Marvel account!</p></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
         <tr> 
          <td align="left" bgcolor="#ffffff" style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff"> 
           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td align="center" valign="top" style="padding:0;Margin:0;width:530px"> 
               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" class="es-m-txt-l es-m-p0r es-m-p10l" style="padding:0;Margin:0;padding-right:40px;font-size:0"> 
                   <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                     <tr> 
                      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Facebook" src="https://wibhow.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/facebook-circle-black-bordered.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Twitter" src="https://wibhow.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/twitter-circle-black-bordered.png" alt="Tw" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                      <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Instagram" src="https://wibhow.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/instagram-circle-black-bordered.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                      <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img title="Youtube" src="https://wibhow.stripocdn.email/content/assets/img/social-icons/circle-black-bordered/youtube-circle-black-bordered.png" alt="Yt" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table> 
   <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
     <tr> 
      <td align="center" style="padding:0;Margin:0"> 
       <table bgcolor="#3c2c4c" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:570px"> 
         <tr> 
          <td align="left" bgcolor="#F9ED2E" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#f9ed2e"> 
           <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:530px"> 
               <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" height="0" style="padding:0;Margin:0"></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
         <tr> 
          <td align="left" style="padding:20px;Margin:0"> 
           <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
             <tr> 
              <td align="left" style="padding:0;Margin:0;width:530px"> 
               <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                 <tr> 
                  <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:21px;color:#333333;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:georgia, times, 'times new roman', serif;line-height:18px;color:#333333;font-size:12px"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:12px" href=""></a></strong></p></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table></td> 
         </tr> 
       </table></td> 
     </tr> 
   </table></td> 
 </tr> 
</table> 
</div>  ` // html body
    });
    return options.messageId;
}

module.exports = main