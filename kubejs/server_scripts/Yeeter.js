// Remove ONLY the recipe for an item
let removeRecipe = (removed) => {
    ServerEvents.recipes(event => {
        event.remove({ output: removed })
    })
}

// Hide items from EMI and remove their recipes
let yeet = (yeeted) => {
    removeRecipe(yeeted)
    ServerEvents.tags('item', event => {
        event.removeAllTagsFrom(yeeted)
        event.add('c:hidden_from_recipe_viewers', yeeted)
    })
}

// Hide fluids from EMI and remove their recipes
let drain = (drained) => {
    ServerEvents.recipes(event => {
        event.remove({ output: Fluid.of(drained) })
    })
    ServerEvents.tags('fluid', event => {
        event.removeAllTagsFrom(drained)
        event.add('c:hidden_from_recipe_viewers', drained)
    })
}

//The following lines take Thermal Series, grab it by the shoulders and shove it head first into a Large Maceration Tower
//before plugging the tower into the Dyson Swarm's power grid, filtering its remains in an Ore Washer
//and processing the rest in a Thermal Centrifuge

Ingredient.of(/thermal:.*_(ore|sand|ingot|block|nugget|coin|dust|plate|gear|bucket)$/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:raw_.*/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:.*(rockwool|rubberwood|cast|coin)/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:.*augment.*/).itemIds.forEach(item => yeet(item))

Ingredient.of(/gtceu:(lead|red_alloy)_.*cable/).itemIds.forEach(item => removeRecipe(item))
Ingredient.of(/functionalstorage:,*fluid*/).itemIds.forEach(item => yeet(item))
Ingredient.of(/gtceu:(lp|hp)_steam.*/).itemIds.forEach(item => yeet(item))


const items = [
                    'thermal:machine_sawmill',
                    'thermal:machine_insolator',
                    'thermal:machine_crucible',
                    'thermal:machine_chiller',
                    'thermal:machine_refinery',
                    'thermal:machine_pyrolyzer',
                    'thermal:machine_bottler',
                    'thermal:machine_brewer', 
                    'thermal:machine_crystallizer',
                    'thermal:machine_crafter',
                    'thermal:tinker_bench',
                    'thermal:energy_cell',
                    'thermal:fluid_cell',
                    'thermal:device_tree_extractor',
                    'thermal:device_fisher',
                    'thermal:device_rock_gen',
                    'thermal:device_xp_condenser',
                    'thermal:device_potion_diffuser',
                    'thermal:apatite',
                    'thermal:cinnabar',
                    'thermal:niter',
                    'thermal:sulfur',
                    'thermal:sawdust',
                    'thermal:coal_coke',
                    'thermal:bitumen',
                    'thermal:tar',
                    'thermal:rubber',
                    'thermal:cured_rubber',
                    'thermal:drill_head',
                    'thermal:saw_blade',
                    'thermal:ruby',
                    'thermal:sapphire',
                    'thermal:rf_potato',
                    'thermal:xp_crystal',
                    'thermal:lock',
                    'thermal:satchel',
                    'thermal:detonator',
                    'thermal:florb',
                    'thermal:compost',
                    'thermal:phytogro',
                    'thermal:junk_net',
                    'thermal:aquachow',
                    'thermal:deep_aquachow',
                    'ae2:facade',
                    'gtceu:steam_miner',
                    'gtceu:primitive_blast_furnace',
                    'thermal:press_gear_die',
                    'thermal:press_packing_2x2_die',
                    'thermal:press_packing_3x3_die',
                    'thermal:press_unpacking_die',
]            

const fluids = [
                    'thermal:redstone',
                    'thermal:glowstone',
                    'thermal:ender',
                    'thermal:sap',
                    'thermal:syrup',
                    'thermal:resin',
                    'thermal:tree_oil',
                    'thermal:latex',
                    'thermal:creosote',
                    'thermal:crude_oil',
                    'thermal:heavy_oil',
                    'thermal:light_oil',
                    'thermal:refined_fuel',
                    'cofh_core:potion',
                    'cofh_core:honey',
                    'cofh_core:experience',
                    'cofh_core:milk'
]

items.forEach(item => yeet(item))
fluids.forEach(fluid => drain(fluid))
