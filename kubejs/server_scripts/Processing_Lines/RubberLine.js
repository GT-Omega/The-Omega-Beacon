ServerEvents.recipes(event => {
    event.recipes.gtceu.tree_fluid_extraction('rubber_extract')
        .itemInputs('6x #minecraft:logs')
        .outputFluids('gtceu:latex 864')
        .duration(2400)
        .EUt(0)

    event.recipes.gtceu.fermenting('apple_to_cider')
        .itemInputs('minecraft:apple')
        .outputFluids('gtceu:cider_vinegar 144')
        .duration(600)
        .EUt(0)
    
    event.recipes.gtceu.fermenting('rubber_mixing')
        .inputFluids('gtceu:latex 864', 'gtceu:cider_vinegar 72')
        .outputFluids('gtceu:natural_rubber 864')
        .duration(600)
        .EUt(0)
    
    event.shapeless('6x gtceu:natural_rubber_plate', ['gtceu:natural_rubber_bucket', '#forge:tools/mallets'])
})