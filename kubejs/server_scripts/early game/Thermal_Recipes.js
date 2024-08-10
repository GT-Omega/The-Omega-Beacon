ServerEvents.recipes(event => {

//GTCEUM Plates     event.recipes.thermal.press('2x gtceu:tin_plate', '3x gtceu:tin_ingot'
event.recipes.thermal.press('2x gtceu:copper_plate', '3x minecraft:copper_ingot')
event.recipes.thermal.press('2x gtceu:tin_plate', '3x gtceu:tin_ingot')
event.recipes.thermal.press('2x gtceu:lead_plate', '3x gtceu:lead_ingot')  
event.recipes.thermal.press('2x gtceu:steel_plate', '3x gtceu:steel_ingot')
event.recipes.thermal.press('2x gtceu:iron_plate', '3x gtceu:tin_ingot')
event.recipes.thermal.press('2x gtceu:copper_plate', '3x minecraft:ingot_ingot')
event.recipes.thermal.press('2x gtceu:red_alloy_plate', '3x gtceu:red_alloy_ingot')
event.recipes.thermal.press('gtceu:compressed_fireclay', ['gtceu:fireclay_dust', 'gtceu:ingot_casting_mold'])

//firebrick 
event.recipes.thermal.press('gtceu:compressed_fireclay', 
    ['gtceu:fireclay_dust', 'gtceu:ingot_casting_mold'])


//induction smleter recipe
event.recipes.thermal.smelter('2x gtceu:tin_alloy_ingot', ['minecraft:iron_ingot', 'gtceu:tin_ingot'])
event.recipes.thermal.smelter('2x gtceu:tin_alloy_ingot', ['minecraft:iron_ingot', 'gtceu:tin_ingot'])
})


//add thermal tag to all gtmolds :Tr:
ServerEvents.tags('item', event =>{

    event.add('thermal:crafting/dies','gtceu:ingot_casting_mold')
    event.add('thermal:crafting/dies','gtceu:gear_casting_mold')

    

    
})
    
    