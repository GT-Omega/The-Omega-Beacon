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
//before plugging the tower into the Dyson Swarm's power grid

Ingredient.of(/thermal:.*_(ore|sand|ingot|block|nugget|coin|dust|plate|gear)$/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:raw_.*/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:.*(rockwool|rubberwood|cast|coin)/).itemIds.forEach(item => yeet(item))
Ingredient.of(/thermal:.*augment.*/).itemIds.forEach(item => yeet(item))
const machines = ['thermal:machine_sawmill',
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
                    'thermal:fluid_cell',
                    'thermal_device_tree_extractor',
                    'thermal_device_fisher',
                    'thermal_device_potion_diffuser'
]
const randoms = ['thermal:apatite',
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
                    'thermal:lock',
                    'thermal:satchel',
                    'thermal:detonator',
                    'thermal:florb',
                    'thermal:compost',
                    'thermal:phytogro',
                    'thermal:junk_net',
                    'thermal:aquachow',
                    'thermal:deep_aquachow'
]
machines.forEach(item => yeet(item))
randoms.forEach(item => yeet(item))