const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
        country: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        }
}, {
    timestamps: true
});

module.exports = mongoose.model('Country', CountrySchema);
