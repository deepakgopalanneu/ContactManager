/**
 * Service for contact operations.
 */

'use strict';
const mongoose = require('mongoose'),
Contact = mongoose.model('contacts');

/**
 * Returns an array of contact object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Contact.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new contact object.
 *
 * @param {Object} contact {contact object}
 */
exports.save = function (contact) {
    const newContact = new Contact(contact);
    const promise = newContact.save();
    return promise;
};

/**
 * Returns the contact object matching the id.
 *
 * @param {string} contactId {Id of the contact object}
 */
exports.get = function (contactId) {
    const promise = Contact.findById(contactId).exec();
    return promise
};

/**
 * Updates and returns the contact object.
 *
 * @param {Object} contact {Contact object}
 */
exports.update = function (contact) {
    contact.modified_date = new Date();
    const promise = Contact.findOneAndUpdate({_id: contact._id}, contact).exec();
    return promise;
};

/**
 * Deletes the contact object matching the id.
 *
 * @param {string} contactId {Id of the contact object}
 */
exports.delete = function (contactId) {
    const promise = Contact.remove({_id: contactId});
    return promise;
};