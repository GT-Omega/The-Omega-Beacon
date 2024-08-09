//earlygame gregified recipes and reworked ulv frames

ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:vacuum_tube',
        [

            'ABA',
            'CCC',
            '   '

        ],
        {

            A:['gtceu:iron_bolt'],
            B:['gtceu:glass_tube'],
            C:['gtceu:copper_single_wire']


        }
    ).id('gtceu:shaped/vacuum_tube')
  
    event.shaped(
        'gtceu:ulv_machine_hull', 
    [ 'FGF',
      'HIH',
      '   ',  
    ],
    {

        F:['gtceu:tin_plate'],
        G:['gtceu:iron_plate'],
        H:['gtceu:red_alloy_single_wire'],
        I:['gtceu:ulv_machine_casing']


    }

    ).id('gtceu:shaped/ulv_machine_hull')
    event.shaped(
        'gtceu:ulv_machine_casing',
        ['KKK',
         'KJK',
         'KKK',  
        ],
        {
        K:['gtceu:iron_plate'],
        J:['#forge:tools/wrench'],

        }
    
        //rf coil stuff
    
    ).id('gtceu:shaped/ulv_machine_casing')

    event.shaped(
        'gtceu:ulv_voltage_coil',
        [
            'NNN',
            'NON',
            'NNN',
       ],
       {

            N:['gtceu:fine_copper_wire'],
            O:[['gtceu:iron_rod']]

       }
    ).id('gtceu:shaped/ulv_voltage_cell')
    
    
    event.shaped(
        'thermal:rf_coil',
        [

            'LLL',
            'LML',
            'LLL',

        ],
        {

            L : ['gtceu:fine_red_alloy_wire'],
            M :  ['gtceu:ulv_voltage_coil']

        }
        
    
    
    ).id('thermal:rf_coil')
   
    
    
    //ULV components cheaper
    event.shaped(
        'ulvcovm:ulv_electric_motor',
        [
            'TR',
            'MT'
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {
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
        ],
        {   
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
        ],
        {
            R: 'gtceu:sticky_resin',
            M: 'ulvcovm:ulv_electric_pump'
        }
    ).id('ulvcovm:shaped/ulv_electric_conveyor')
    
    event.custom({
        type: 'ae2:transform',
        circumstance: { type: 'fluid', tag: 'minecraft:lava' },
        ingredients: [
          { item: 'kubejs:fired_ball_cast' }, { item: Item.of('gtceu:glass_dust',3)}
        ],
        result: { count: 1, id: 'gtceu:glass_tube' }
    }).id('omega:transformation/glass_tube')
    
    event.smelting('kubejs:unfired_ball_cast', 'kubejs:fired_ball_cast').id('omega:smelting/fired_ball_cast')
    
    event.shapeless('2x kubejs:clay_plate', ['#forge:tools/hammer', 'minecraft:clay']).id('omega:shapeless/clay_plate')

    event.shapeless('kubejs:unfired_ball_cast', ['#forge:tools/hammer', 'kubejs:clay_plate']).id('omega:shapeless/unfired_ball_cast')
})
