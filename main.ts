let distancia = 0
basic.forever(function () {
    distancia = hackbitsensor.us_sonar(
    DigitalPin.P13,
    DigitalPin.P14,
    hackbitsensor.PingUnit.cm
    )
    if (distancia < 5) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (distancia >= 5 && distancia < 10) {
        music.playTone(294, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (distancia >= 10 && distancia < 15) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (distancia >= 15 && distancia < 20) {
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (distancia >= 20 && distancia < 25) {
        music.playTone(392, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (distancia >= 25 && distancia < 30) {
        music.playTone(440, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Whole))
    } else if (distancia >= 25 && distancia < 30) {
        music.playTone(494, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    } else if (distancia >= 30 && distancia < 35) {
        music.playTone(523, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
    }
    music.stopAllSounds()
})
