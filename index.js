/**
 * Created by venkateshkoka on 10/7/17.
 */
const express = require('express');
const app = express();

app.get('/', (req, res) =>  {
    res.send({hi:'there'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
//localhost:5000 on your browser.