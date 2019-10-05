'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contact object.
 */
let ContactSchema = new Schema({
    /**
     * firstname of the contact.
     */
    firstname: {
        type: String,
        required: "firstname is required"
    },
    /**
     * lastname of the contact
     */
    lastname: {
        type: String,
        required: "lastname is required"
    },
    /**
     * phone number.
     */
    phone: {
        type: String,
        required: "phone is required"
    },
    /**
     * email
     */
    email: {
        type: String,
        required: "email is required"
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('contacts', ContactSchema);