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
            D:['gtceu:small_iron_gear'],
            E:['thermal:rf_coil']

        }

    )

    //I think this might be too expensive, 22 iron 12 copper 4 tin 12 red alloy and 18 lead is alot. 
    //Specifically the lead cause 18 is alot might want to change the coil recipe maybe idk im tired 
    //and this is exhausting. 
    // Todo: Get a better sleep schedule
event.shaped(
    'thermal:machine_pulverizer',
    [

        ' F ',
        'GHG',
        'IJI'

    ],
    {

        F:['minecraft:piston'],
        G:['gtceu:vacuum_tube'],
        H:[['gtceu:ulv_machine_hull']],
        I:['gtceu:ulv_voltage_coil'],
        J:['thermal:rf_coil']

    }
)
})