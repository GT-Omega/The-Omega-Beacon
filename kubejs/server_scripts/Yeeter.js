let yeet = (yeeted) => {
    ServerEvents.recipes(event => {
        event.remove({ output: yeeted })
    })
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(yeeted)
        event.add('forge:viewers/hidden', yeeted)
    })
}

//The following lines take Thermal Series, grab it by the shoulders and shove it head first into a Large Maceration Tower

Ingredient.of(/thermal:.*_(ore|sand|ingot|block|nugget|coin|dust|plate|gear)/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:raw_.*/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:.*(rockwool|rubberwood)/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:.*augment.*/).itemIds.forEach(item => yeet(item))
