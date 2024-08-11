StartupEvents.registry('item', event => {
  event.create('unfired_ball_cast').texture('kubejs:item/unfired_ball_cast')
  event.create('hot_wrought_iron_ingot')
  event.create('fired_ball_cast').texture('kubejs:item/fired_ball_cast').fireResistant(true)
})
