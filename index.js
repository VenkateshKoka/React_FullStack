/**
 * Created by venkateshkoka on 10/7/17.
 */


const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge : 30 * 24 * 3600 * 1000 ,
    keys : [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

// new GoogleStrategy() starts a new instance of google passport strategy.

// ClientId 465977177989-44g8s4ikt16fjadbfbd83l00d3dmmjck.apps.googleusercontent.com
// client_secret : pyKMkaKy1IPJnQlQma7aSRcb


//  require('./routes/authRoutes')(app);
// the above line is equivalent to const authroutes and calling authroutes(app)
authRoutes(app);

app.get('/', (req, res) =>  {
    res.send({hi:'there'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
//localhost:5000 on your browser.