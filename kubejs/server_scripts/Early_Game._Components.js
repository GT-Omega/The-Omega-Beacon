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
    )
  
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

    )
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
    
    )

    event.shaped(
        'thermal:rf_coil',
        [

            'LLL',
            'LML',
            'LLL',

        ],
        {

            L : ['gtceu:fine_red_alloy_wire'],
            M :  ['gtceu:iron_rod']

        }
        
    
    
    )
    event.shaped(
        'gtceu:ulv_voltage_coil',
        [
            'NNN',
            'NON',
            'NNN',
       ],
       {

            N:['gtceu:fine_lead_wire'],
            O:[['gtceu:copper_rod']]

       }
    )


})