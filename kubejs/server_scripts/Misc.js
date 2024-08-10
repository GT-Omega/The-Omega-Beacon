ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('netherrack_dust_from_nether_bricks')
        .itemInputs('minecraft:nether_bricks')
        .itemOutputs('4x gtceu:netherrack_dust')
        .duration(80).EUt(4)

        event.recipes.gtceu.macerator('netherrack_dust_from_cracked_nether_bricks')
        .itemInputs('minecraft:cracked_nether_bricks')
        .itemOutputs('4x gtceu:netherrack_dust')
        .duration(80).EUt(4)
})