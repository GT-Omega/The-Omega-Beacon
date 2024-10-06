GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('latex')
        .fluid()
        .color(0xf2f2f2)

    event.create('cider_vinegar')
        .fluid()
        .color(0xc2630d)

    event.create('natural_rubber')
        .fluid().ingot().polymer()
        .color(0xfce094)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})