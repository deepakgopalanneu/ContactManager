/**
 * Controller for contact endpoints.
 */

'use strict';
//import contact service.
const contactService = require('../services/contact-service');
/**
 * Returns a list of contacts in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    contactService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new contact with the request JSON and
 * returns contact JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newContact = Object.assign({}, request.body);
    const resolve = (contact) => {
        response.status(200);
        response.json(contacts);
        response.send('contact added successfully');
    };
    contactService.save(newContact)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a contact object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contactService.get(request.params.contactId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a contact object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const contact = Object.assign({}, request.body);
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contact._id = request.params.contactId;
    contactService.update(contact)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a contact object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (contact) => {
        response.status(200);
        response.json({
            message: 'contact Successfully deleted'
        });
    };
    contactService.delete(request.params.contactId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};