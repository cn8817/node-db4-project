const recipe = [
    {recipe_name: 'Broccoli Pesto Pasta'},
    {recipe_name: 'Broccoli Pesto Pasta'},
    {recipe_name: 'Broccoli Pesto Pasta'},
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
    { ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
]

const step_ingredients = [
    {step_id: 2, ingredient_id:1, quantity: 1},
    {step_id: 2, ingredient_id:1, quantity: 1},
    {step_id: 2, ingredient_id:1, quantity: 1},

    {step_id: 2, ingredient_id:1, quantity: 1},
    {step_id: 2, ingredient_id:1, quantity: 1},

    {step_id: 2, ingredient_id:1, quantity: 1},
]

const steps = [
    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },
    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },
    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },

    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },
    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },
    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },

    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },
    { step_text: 'Heat Pan', step_number: 1, recipe_id:1 },

]
exports.seed = async function(knex) {
    await knex('recipes').insert(recipies)
    await knex('ingredients').insert(ingreients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)

}