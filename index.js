const express = require('express'); 
const mongoose = reqire('mongoose');
const keys = require('../config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express(); 

require('./routes/authRoutes')(app); 

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));