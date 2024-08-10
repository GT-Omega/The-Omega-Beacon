ServerEvents.tags('item', event =>{
    //add thermal tag to all gtmolds :Tr:
    event.add('thermal:crafting/dies','gtceu:ingot_casting_mold')
    event.add('thermal:crafting/dies','gtceu:gear_casting_mold')    
})