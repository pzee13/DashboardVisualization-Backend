const fs = require('fs');
const path = require('path');
const WorldDetails = require('../model/dataModel');

exports.getWorldDetails = async (req, res) => {

    try {
        const details = await WorldDetails.find();
        console.log("ss",details)
        res.status(200).json(details);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

