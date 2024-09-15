//earlygame gregified recipes and reworked ulv frames

ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:vacuum_tube',
        [
            'ABA',
            'CCC'
        ], {
            A: 'gtceu:iron_bolt',
            B: 'gtceu:glass_tube',
            C: 'gtceu:copper_single_wire'
        }
    ).id('gtceu:shaped/vacuum_tube')
  
    event.shaped(
        'gtceu:ulv_machine_hull',
        [
            'FGF',
            'HIH'
        ], {
            F: 'gtceu:tin_plate',
            G: 'gtceu:iron_plate',
            H: 'gtceu:red_alloy_single_wire',
            I: 'gtceu:ulv_machine_casing'
        }
    ).id('gtceu:shaped/ulv_machine_hull')

    event.shaped(
        'gtceu:ulv_machine_casing',
        [
            'KKK',
            'KJK',
            'KKK',  
        ], {
            K: 'gtceu:iron_plate',
            J: '#forge:tools/wrench',
        }
    ).id('gtceu:shaped/ulv_machine_casing')

    //rf coil stuff
    event.shaped(
        'gtceu:ulv_voltage_coil',
        [
            'NNN',
            'NON',
            'NNN',
        ], {
            N: 'gtceu:fine_copper_wire',
            O: 'gtceu:iron_rod'
        }
    ).id('gtceu:shaped/ulv_voltage_cell')
    
    
    event.shaped(
        'thermal:rf_coil',
        [
            'LLL',
            'LML',
            'LLL',
        ], {
            L: 'gtceu:fine_red_alloy_wire',
            M: 'gtceu:ulv_voltage_coil'
        }    
    ).id('thermal:rf_coil')
    
    //ULV components cheaper
    event.shaped(
        'ulvcovm:ulv_electric_motor',
        [
            'TR',
            'MT'
        ], {
            T: 'gtceu:tin_single_wire',
            R: 'gtceu:copper_rod',
            M: 'gtceu:magnetic_iron_rod'
        }
    ).id('ulvcovm:shaped/ulv_electric_motor')

    event.shaped(
        'ulvcovm:ulv_electric_piston',
        [
            'PR',
            'MG'
        ], {
            P: 'gtceu:copper_plate',
            R: 'gtceu:copper_rod',
            M: 'ulvcovm:ulv_electric_motor',
            G: 'gtceu:small_copper_gear'
        }
    ).id('ulvcovm:shaped/ulv_electric_piston')

    event.shaped(
        'ulvcovm:ulv_robot_arm',
        [
            'MR',
            'PC'
        ], {
            P: 'ulvcovm:ulv_electric_piston',
            R: 'gtceu:copper_rod',
            M: 'ulvcovm:ulv_electric_motor',
            C: '#gtceu:circuits/ulv'
        }
    ).id('ulvcovm:shaped/ulv_robot_arm')

    event.shaped(
        'ulvcovm:ulv_electric_pump',
        [
            'PR',
            'WM'
        ], {
            P: 'gtceu:copper_normal_fluid_pipe',
            R: 'gtceu:copper_rotor',
            M: 'ulvcovm:ulv_electric_motor',
            W: 'gtceu:tin_single_wire'
        }
    ).id('ulvcovm:shaped/ulv_electric_pump')

    event.shaped(
        'ulvcovm:ulv_fluid_regulator',
        [
            'TR',
            'MT'
        ], {   
            T: '#gtceu:circuits/ulv',
            R: 'gtceu:tin_single_wire',
            M: 'ulvcovm:ulv_electric_pump'
        }
    ).id('ulvcovm:shaped/ulv_fluid_regulator')

    event.shaped(
        'ulvcovm:ulv_conveyor_module',
        [
            'RR',
            'MM'
        ], {
            R: 'gtceu:sticky_resin',
            M: 'ulvcovm:ulv_electric_pump'
        }
    ).id('ulvcovm:shaped/ulv_electric_conveyor')

    event.shaped('kubejs:treated_wood_casing',
        [
            'NPN',
            'PHP',
            'NPN'
        ], {
            N:['gtceu:tin_alloy_screw'],
            P: ['gtceu:treated_wood_plate'],
            H: ['#forge:tools/screwdrivers']
        }
    )

    // Treated Wood Plank Recipes
    event.recipes.thermal.press('gtceu:treated_wood_plate', ['gtceu:treated_wood_dust'])

    // Glass tube
    event.shapeless('2x gtceu:clay_plate', ['#forge:tools/hammers', 'minecraft:clay']).id('omega:shapeless/clay_plate')
    event.shapeless('kubejs:unfired_ball_cast', ['#forge:tools/mallets', 'gtceu:clay_plate']).id('omega:shapeless/unfired_ball_cast')
    
    event.smelting('kubejs:fired_ball_cast', 'kubejs:unfired_ball_cast').id('omega:smelting/fired_ball_cast')

    event.custom({
        "type": 'ae2:transform',
        "circumstance": { "type": 'fluid', "tag": 'minecraft:lava' },
        "ingredients": [
          { "item": 'kubejs:fired_ball_cast' }, { "item": 'gtceu:glass_dust' }, ],
        "result": { "count": 2, "item": 'gtceu:glass_tube' }
    }).id('omega:transformation/glass_tube')
    
    event.recipes.thermal.press('gtceu:compressed_fireclay', ['gtceu:fireclay_dust', 'gtceu:ingot_casting_mold'])
    
    event.recipes.thermal.smelter('2x gtceu:tin_alloy_ingot', ['minecraft:iron_ingot', 'gtceu:tin_ingot'])

    //Wrought Iron Processing
    event.remove({ id: 'gtceu:smelting/wrought_iron_nugget' })
    
    event.recipes.thermal.smelter(['kubejs:hot_wrought_iron_ingot', 'gtceu:dark_ash_dust'], ['minecraft:iron_ingot'])
    event.recipes.thermal.press('gtceu:wrought_iron_ingot', ['kubejs:hot_wrought_iron_ingot'])

    function naturalRubberCables(element) {
        event.shapeless(`gtceu:${element}_single_cable`, [`gtceu:${element}_single_wire`, 'gtceu:natural_rubber_plate'])
        event.shapeless(`gtceu:${element}_double_cable`, [`gtceu:${element}_double_wire`, 'gtceu:natural_rubber_plate'])
        event.shapeless(`gtceu:${element}_quadruple_cable`, [`gtceu:${element}_quadruple_wire`, 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate'])
        event.shapeless(`gtceu:${element}_octal_cable`, [`gtceu:${element}_octal_wire`, 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate'])
        event.shapeless(`gtceu:${element}_hex_cable`, [`gtceu:${element}_hex_wire`, 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate', 'gtceu:natural_rubber_plate'])
    }
  
    naturalRubberCables('lead')
    naturalRubberCables('red_alloy')

    //ULV Paper
    event.custom({
        "type": 'ae2:transform',
        "circumstance": { "type": 'fluid', "tag": 'minecraft:water' },
        "ingredients": [
          { "item": 'gtceu:wood_dust' }, ],
        "result": { "count": 1, "item": 'gtceu:paper_dust' }
    }).id('omega:transformation/paper_dust')

    event.recipes.thermal.press('minecraft:paper', ['gtceu:paper_dust'])
})