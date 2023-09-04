const Term = require('../models/Term');

const addNewTerm = async (req, res) => {
    try {
        const data = await Term.create(req.body)

        res.status(200).json({
            message: "success",
            data: {
                data
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "failure",
            data: {
                error
            }
        })
    }
}

const deleteTerm = async (req, res) => {
    try {
        const data = await Term.findOneAndDelete({ _id: req.params.id })

        res.status(200).json({
            message: "success",
            data: "deleted"
        })
    } catch (error) {
        res.status(400).json({
            message: "failure",
            data: {
                error
            }
        })
    }
}

const getAllTerms = async (req, res) => {
    try {
        const data = await Term.find()

        res.status(200).json({
            message: "success",
            total: data.length,
            data: {
                data
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "failure",
            data: {
                error
            }
        })
    }
}

module.exports = {
    addNewTerm,
    getAllTerms,
    deleteTerm
}