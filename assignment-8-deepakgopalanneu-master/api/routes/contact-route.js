/**
 * Contact endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const contactController = require('../controllers/contact-controller');
    // contact Routes for search and create.
    app.route('/contacts')
        .get(contactController.list)
        .post(contactController.post);

    // Contact Routes for get, update and delete.
    app.route('/contacts/:contactId')
        .get(contactController.get)
        .put(contactController.put)
        .delete(contactController.delete);
};