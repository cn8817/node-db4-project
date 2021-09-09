const router = require('express').Router()
const Recipe = require('./recipies-model')

router.get('/:recipe_id',(req, res, next) => {
    Recipe.getRecipieById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
})

router.use((err,req,res,next) => {
    res.status(500).json({
        customMessage: "error",
        message: err.message,
        staack: err.stack,
    })
})

module.exports = router