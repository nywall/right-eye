radio.setTransmitPower(3)
radio.setGroup(1)
let eyeState = 0
led.setBrightness(255)
basic.forever(function () {
    radio.sendNumber(eyeState)
    if (eyeState == 0) {
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (eyeState == 1) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . # # # #
            . # # # #
            . # # # #
            `)
    } else if (eyeState == 2) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (eyeState == 3) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # # .
            . . # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(randint(2000, 6000))
    eyeState = randint(0, 4)
})
