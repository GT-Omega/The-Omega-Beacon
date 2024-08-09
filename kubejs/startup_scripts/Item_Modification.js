ItemEvents.modification(event => {
    event.modify('gtceu:glass_dust', item => {
      item.fireResistant = true
    })
    event.modify('gtceu:glass_tube', item => {
        item.fireResistant = true
      })
})