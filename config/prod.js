module.exports = {
    // {"web":{"client_id":"604631272777-tk5ir6o9deusb11uv1f83v7ushbf2ckf.apps.googleusercontent.com","project_id":"core-veld-226302","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://www.googleapis.com/oauth2/v3/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"YcC4_hNAknKtkDL7acZwkXT4","redirect_uris":["http://localhost:5000"],"javascript_origins":["http://localhost:5000"]}}
    googleClientID: process.env.GOOGLE_CLIENT_ID, 
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI, 
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLIC, 
    stripeSecretKey: process.env.STRIPE_SECRET,
    sendGridKey: process.env.SENDGRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
};