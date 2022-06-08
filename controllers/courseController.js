const Course = require('../models/Course')

exports.createCource = async (req, res) => {

    try {
        const course = await Course.create(req.body)
        res.status(201).json({
            status: 'succes',
            course
        })
    } catch {
        res.status(400).json({
            status: 'failed',
            error

        })
    }
}