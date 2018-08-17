const express = require('express');
const authRoutes = require('./routes/auth-routes');
const app = express();

// setup view engine
app.set('view engine', 'ejs');

// setup routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port: ' + port);
});
