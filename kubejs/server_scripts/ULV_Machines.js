ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:ulv_tree_fluid_extractor',
        [
            'SMS',
            'PpP',
            'PBP'
        ],
        {
            'S': 'gtceu:iron_screw',
            'M': '#forge:tools/mallets',
            'P': 'gtceu:treated_wood_plate',
            'p': 'gtceu:treated_wood_normal_fluid_pipe',
            'B': 'minecraft:bucket'
        }
    ).id('omega:tfe')

    event.shaped(
        'gtceu:ulv_fermenting_barrel',
        [
            'PMP',
            'P P',
            'SPS'
        ],
        {
            'S': 'gtceu:iron_screw',
            'M': '#forge:tools/mallets',
            'P': 'gtceu:treated_wood_plate'    
        }
    ).id('omega:fermenting_barrel')
})