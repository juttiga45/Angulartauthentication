const Countries = require('../models/country.model.js');

// Create and Save a new Course.
exports.create = (req, res) => {
    // Validate request
    if(!req.body.country && !req.body.latitude && !req.body.longitude) {
        return res.status(400).send({
            message: "Course id, name and topics can not be empty."
        });
    }

    // Create a Device
    const country = new Countries({
        country: req.body.country,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    console.log('country to create ==>', country);
    // Save Course in the database
    country.save()
    .then(data => {
        console.log("data", data);
        res.send(data);
    }).catch(err => {
        console.log("err", err);
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Course."
        });
    });
};

// Retrieve and return all Device from the database.
exports.findAll = (req, res) => {
    Countries.find()
    .then(country => {
        res.send(country);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Courses."
        });
    });
};

// Find a single Device with a deviceId
exports.findOne = (req, res) => {
    Countries.findOne({"courseId":req.params.country})
    .then(country => {
        if(!country) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });            
        }
        res.send(country);
    }).catch(err => {
        console.log(err);
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Course with id " + req.params.courseId
        });
    });
};

// Update a Device identified by the deviceId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.country && !req.body.latitude && !req.body.longitude) {
        return res.status(400).send({
            message: "Course content can not be empty"
        });
    }
    
    // Find Course and update it with the request body
    Countries.findByIdAndUpdate(req.params.country, {
        country: req.body.country,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }, {new: true})
    .then(country => {
        if(!country) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });
        }
        res.send(country);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Course not found with id " + req.params.courseId
            });                
        }
        return res.status(500).send({
            message: "Error updating Course with id " + req.params.courseId
        });
    });
};

// Delete a Device with the specified DeviceId in the request
exports.delete = (req, res) => {
    Countries.findByIdAndRemove(req.params.country)
    .then(course => {
        if(!course) {
            return res.status(404).send({
                message: "Course not found with id " + req.params.country
            });
        }
        res.send({message: "Course deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Course not found with id " + req.params.country
            });                
        }
        return res.status(500).send({
            message: "Could not delete Course with id " + req.params.courseId
        });
    });
};
