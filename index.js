const express = require('express'); 
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require("body-parser");
const keys = require('./config/keys');
require('./models/user');
require('./models/survey'); 
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); 

app.enable("trust proxy");
app.set("trust proxy", true); // gcloud proxy 

app.use(bodyParser.json()); // post requests will be assigned to req.body as json
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days 
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); 
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //express will serve up production assets 
    // like our main.js file
    app.use(express.static('client/build')); 

    // express will serve up the index.html
    // file if it doesn't recognize the route
    const path = require('path'); 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    });
}

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port')); 