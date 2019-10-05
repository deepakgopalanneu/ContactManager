'use strict';
module.exports = function (app) {
    //Initialize models
    let contactModel = require('./models/contact');

    //Initialize routes
    let contactRoutes = require('./routes/contact-route');
    contactRoutes(app);
};