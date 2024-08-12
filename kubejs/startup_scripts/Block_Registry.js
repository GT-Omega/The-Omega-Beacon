StartupEvents.registry('block', event => {
    event.create('treated_wood_casing')
        .displayName('Treated Wood Casing')
        .soundType('wood')
        .tagBlock('minecraft:mineable/axe')
})