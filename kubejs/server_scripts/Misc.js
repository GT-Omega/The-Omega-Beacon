ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('netherrack_dust_from_nether_bricks')
        .itemInputs('minecraft:nether_bricks')
        .itemOutputs('4x gtceu:netherrack_dust')
        .duration(80).EUt(4)

        event.recipes.gtceu.macerator('netherrack_dust_from_cracked_nether_bricks')
        .itemInputs('minecraft:cracked_nether_bricks')
        .itemOutputs('4x gtceu:netherrack_dust')
        .duration(80).EUt(4)

    //Ash processing
    event.remove({ id: 'gtceu:centrifuge/ash_separation' })
    event.recipes.gtceu.centrifuge('ash_centrifuge_single')
        .itemInputs('gtceu:ash_dust')
        .chancedOutput('gtceu:quicklime_dust', 4950, 0)
        .chancedOutput('gtceu:potash_dust', 1600, 0)
        .chancedOutput('gtceu:magnesia_dust', 1500, 0)
        .chancedOutput('gtceu:phosphorus_pentoxide_dust', 60, 0)
        .chancedOutput('gtceu:soda_ash_dust', 600, 0)
        .chancedOutput('gtceu:hematite_dust', 275, 0)
        .duration(240).EUt(30)
        .circuit(1)

    event.recipes.gtceu.centrifuge('ash_centrifuge_batch')
        .itemInputs('36x gtceu:ash_dust')
        .itemOutputs('9x gtceu:quicklime_dust',
                     '6x gtceu:potash_dust',
                     '5x gtceu:magnesia_dust',
                     'gtceu:phosphorus_pentoxide_dust',
                     '4x gtceu:soda_ash_dust',
                     '2x gtceu:hematite_dust')
        .duration(6000).EUt(30)
        .circuit(9)

    //Treated Wood Pulverization
    event.recipes.thermal.pulverizer(['gtceu:treated_wood_dust'], ['gtceu:treated_wood_planks'])
    event.recipes.thermal.pulverizer(['gtceu:treated_wood_dust'], ['gtceu:treated_wood_plate'])
    event.recipes.thermal.pulverizer(['gtceu:treated_wood_dust'], ['gtceu:treated_wood_door'])
    event.recipes.thermal.pulverizer(['gtceu:treated_wood_dust'], ['gtceu:treated_wood_small_fluid_pipe'])
    event.recipes.thermal.pulverizer(['3x gtceu:treated_wood_dust'], ['gtceu:treated_wood_frame'])
    event.recipes.thermal.pulverizer(['3x gtceu:treated_wood_dust'], ['gtceu:treated_wood_normal_fluid_pipe'])
    event.recipes.thermal.pulverizer(['6x gtceu:treated_wood_dust'], ['gtceu:treated_wood_large_fluid_pipe'])
})