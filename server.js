// Require Modules
    const express = require('express');
    const indexRouter = require('./routes/index');
    const catsRouter = require('./routes/cats');
    const skillsRouter = require('./routes/skills');

// Create the Express App
    const app = express();

// Configure the App (app.set)

    // We'll use the ejs view engine
    app.set('view engine', 'ejs');

// Mount Middleware (app.use)
    app.use('/', indexRouter);
    app.use('/cats', catsRouter);
    app.use('/skills', skillsRouter);


// Tell the App to listen on Port 3000
    app.listen(3000, function() {
        console.log('Express is listening on port 3000');
    });