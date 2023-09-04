const router = require('express').Router()
const termCtlr = require('../controllers/terms')

router
    .route('/')
    .get(termCtlr.getAllTerms)
    .post(termCtlr.addNewTerm)

router
    .route('/:id')
    .delete(termCtlr.deleteTerm)

module.exports = router