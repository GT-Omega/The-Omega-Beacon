//i wonder why they named these thermal, maybe because setting up these recipes is kinda HOT

ServerEvents.recipes(event => {
event.shaped(
    'thermal:machine_furnace',
        [   ' A ', 
            'BCB', 
            'DED'
        ],
        {

            A:['gtceu:vacuum_tube'],
            B:['minecraft:bricks'],
            C:['gtceu:ulv_machine_hull'],
            D:['gtceu:small_copper_gear'],
            E:['thermal:rf_coil']

        }

    )

        //I think this might be too expensive, 22 iron 12 copper 4 tin 12 red alloy and 18 lead is alot. 
    //Specifically the lead cause 18 is alot might want to change the coil recipe maybe idk im tired 

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
        H:[['gtceu:ulv_machine_hull']],
        I:['gtceu:small_copper_gear'],
        J:['thermal:rf_coil']

    }
)
})