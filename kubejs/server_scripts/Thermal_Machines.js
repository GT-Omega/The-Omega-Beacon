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
})