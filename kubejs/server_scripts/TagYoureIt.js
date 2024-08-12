// Tags, tags, tags!
// For custom tags created by us, use the 'omega' namespace

ServerEvents.tags('item', event => {
    event.add('omega:rubber_wood', '/gtceu:.*rubber_(wood|log)/')
  
    //add thermal tag to all gtmolds :Tr:
    event.add('thermal:crafting/dies','gtceu:ingot_casting_mold')
    event.add('thermal:crafting/dies','gtceu:gear_casting_mold')   
})