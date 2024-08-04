//i wonder why they named these thermal, maybe because setting up these recipes is kinda HOT

ServerEvents.recipes(event => {
event.shaped(
//i'd rather have my blood sucked out by leaches. Then craft one more of you.
//
    'thermal:machine_furnace',
        [   ' A ', 
            'BCB', 
            'DED'
        ],
        {

            A:['gtceu:vacuum_tube'],
            B:['gtceu:coke_oven_bricks'],
            C:['gtceu:ulv_machine_hull'],
            D:['gtceu:small_copper_gear'],
            E:['thermal:rf_coil']

        }

    ).id('thermal:machine_furnace')


event.shaped(
    'thermal:machine_pulverizer',
    [

        ' F ',
        'GHG',
        'IJI'

    ],
    {

        F:['ulvcovm:ulv_electric_piston'],
        G:['gtceu:vacuum_tube'],
        H:['gtceu:ulv_machine_hull'],
        I:['gtceu:small_copper_gear'],
        J:['thermal:rf_coil']

    }
).id('thermal:machine_pulverizer')


//im an evil person 
//im surprised that the player can stand this one, its akin to walking into a induction smelter naked and burning to a crisp.
event.shaped(
    'thermal:machine_smelter',
    [

        ' K ',
        'LML',
        'NON',

    ],
    {

        K:'thermal:machine_furnace',
        L:'gtceu:firebricks',
        M:'gtceu:ulv_machine_hull',
        N: 'gtceu:small_copper_gear',
        O: 'thermal:rf_coil'
    }
).id('thermal:machine_smelter')

//nah the last one was tame THIS TIME I AM THE VILLAN  
//this recipe should make the player want to shove themself into a forge hammer.
//id rather spend eternity eating shards of glass then to actually do this recipe
event.shaped(
    'thermal:machine_press',
        [

            ' P ',
            'QRQ',
            'STU',

        ],
        {

          P:['minecraft:anvil'],
         Q:['gtceu:vacuum_tube'],
          R:'gtceu:ulv_machine_hull',
          S:['ulvcovm:ulv_electric_motor'],
          T:'thermal:rf_coil',
          U:'ulvcovm:ulv_electric_piston'

        }
    
    ).id('thermal:machine_press')
})