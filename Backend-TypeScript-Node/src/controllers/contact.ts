import nodemailer from "nodemailer";
import { Request, Response } from "express";
import { check, validationResult } from "express-validator";

// !
const transporter = nodemailer.createTransport({
    // service: "Hotmail",
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    auth: {
        type: "OAuth2",
        user: "nzachary46@gmail.com",//process.env.SENDGRID_USER,
        serviceClient: "889852744173-f4q71gsc7bpfqegfm2ufhk25bruaso4n.apps.googleusercontent.com",
        privateKey: "An1aEdvhjzImMqXpl20bWj9t"
        // pass: "eMusk46!", //process.env.SENDGRID_PASSWORD
        // clientId: "889852744173-f4q71gsc7bpfqegfm2ufhk25bruaso4n.apps.googleusercontent.com",
        // clientSecret: "An1aEdvhjzImMqXpl20bWj9t",
        // refreshToken: "1//04-CbkFZSH1yWCgYIARAAGAQSNwF-L9Ir348ubEf3S4opCbO4PjLmauFy76Gp3LaBAe8t6wPtG92u71oZui5p5m0VmGef7DGA5bg"
        // accessToken: "ya29.Il-bB740zjag4ajnK4pkNMj9EkNqTLDq4PjUcvBq7X4JeW6izZjYqHdEECl-RtfqBz-x5RXJ1NM3UCvspzcqgAMQaiYleH0bVTH3NQ3_17GrXRdQVrM6g8nio3yJ3GeNQA"
    }
});

/*
auth – is the authentication object

type – indicates authentication type, set it to ‘OAuth2’
user – user email address (required)
clientId – is the registered client id of the application
clientSecret – is the registered client secret of the application
refreshToken – is an optional refresh token. If it is provided then Nodemailer tries to generate a new access token if existing one expires or fails
accessToken – is the access token for the user. Required only if refreshToken is not available and there is no token refresh callback specified
expires – is an optional expiration time for the current accessToken
accessUrl – is an optional HTTP endpoint for requesting new access tokens. This value defaults to Gmai
*/


/**
 * GET /contact
 * Contact form page.
 */
export const getContact = (req: Request, res: Response) => {
    res.render("contact", {
        title: "Contact"
    });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
export const postContact = (req: Request, res: Response) => {
    check("name", "Name cannot be blank").not().isEmpty();
    check("email", "Email is not valid").isEmail();
    check("message", "Message cannot be blank").not().isEmpty();

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/contact");
    }

    const mailOptions = {
        // to: "your@email.com",
        to: "znick46@hotmail.ca",
        from: "nzachary46@gmail.com",
        // from: `${req.body.name} <${req.body.email}>`,
        subject: "Contact Form",
        text: "foo"
        // text: req.body.message
    };

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            req.flash("errors", { msg: err.message });
            return res.redirect("/contact");
        }
        req.flash("success", { msg: "Email has been sent successfully!" });
        res.redirect("/contact");
    });
};
