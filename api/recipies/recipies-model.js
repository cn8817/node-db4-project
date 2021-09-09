const db = require('../../data/db-config')

async function getRecipieById(recipe_id){
    const recipeRows = await db('recipies as r')
        .where('recipe_id', recipe_id)

    return recipeRows
}

module.exports = { getRecipieById }