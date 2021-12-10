//Sets up a function the returns a json with success 
const nodemailer = require(`nodemailer`)
require("dotenv").config()

const idButtonFun = async () => {
    let id = Math.floor(Math.random()*1000)
    // window.location.href = "http://stackoverflow.com";
    console.log(id)
    return(id)
}

const sendEmail = async ( req, res ) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lorenz.stokes78@ethereal.email',
            pass: process.env.email_password
        }
    });

    let info = await transporter.sendMail({
            to: `zrtsurprise@gmail.com`,
            from: `HAHAHAHuWIsh@Mcdonals.net`,
            replyTo: "somethingelse@idc.net",
            subject: "nodemailer",
            html: `<h1> Hello </h1> <p> testing <em> Nodemailer </em></p><button onclick="idButtonFun()">Reset Password here</button>
            `

    })

    res.json(info);
}

module.exports = {sendEmail,idButtonFun}