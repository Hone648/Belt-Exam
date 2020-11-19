const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./routes/pet.routes')(app);
app.listen(8000, () => {
    console.log('You"ve landed inside my port 8000!')
});