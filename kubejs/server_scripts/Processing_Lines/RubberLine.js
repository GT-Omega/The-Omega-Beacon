ServerEvents.recipes(event => {
    event.recipes.gtceu.tree_fluid_extraction('rubber_extract')
        .itemInputs('6x #omega:rubber_wood')
        .outputFluids('gtceu:latex 864')
        .chancedOutput('3x gtceu:sticky_resin', 3300, 0)
        .duration(2400)
        .EUt(0)

    event.recipes.gtceu.fermenting('apple_to_cider')
        .itemInputs('minecraft:apple')
        .outputFluids('gtceu:cider_vinegar 144')
        .duration(600)
        .EUt(0)
    
    event.recipes.gtceu.fermenting('rubber_mixing')
        .inputFluids('gtceu:latex 1152', 'gtceu:cider_vinegar 144')
        .outputFluids('gtceu:natural_rubber 1296')
        .duration(600)
        .EUt(0)

    event.recipes.gtceu.chemical_reactor('rubber_vulcanising')
        .inputFluids('gtceu:natural_rubber 1296')
        .itemInputs('gtceu:sulfur_dust')
        .outputFluids('gtceu:rubber 1296')
        .duration(600)
        .EUt(16)
    
    event.shapeless('6x gtceu:natural_rubber_plate', ['gtceu:natural_rubber_bucket', '#forge:tools/mallets'])
})