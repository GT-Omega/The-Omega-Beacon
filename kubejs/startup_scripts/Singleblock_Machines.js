GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('tree_fluid_extraction')
        .category('tree_fluid_extraction')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create('fermenting')
        .category('fermenting')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 2, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('tree_fluid_extractor', 'simple', GTValues.ULV)
        .langValue("tree_fluid Extractor")
        .recipeType('tree_fluid_extraction', true, true)
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_treated', 'gtceu:block/machines/tree_fluid_extractor', false);

    event.create('fermenting_barrel', 'simple', GTValues.ULV)
        .langValue("Fermenting Barrel")
        .recipeType('fermenting', true, true)
        .workableCasingRenderer('gtceu:block/storage/drum/wooden_drum', 'gtceu:block/machines/flora_nurturer', false);
})