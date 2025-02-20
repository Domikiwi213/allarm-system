radio.onReceivedNumber(function (receivedNumber) {
    conected_true_or_falce = 1
})
input.onButtonPressed(Button.A, function () {
    serial.redirectToUSB()
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendValue("station one", 0)
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
    }
})
radio.onReceivedValue(function (name, value) {
    radio.setTransmitSerialNumber(true)
    input.calibrateCompass()
})
let conected_true_or_falce = 0
for (let index = 0; index < 20; index++) {
    radio.setGroup(1)
    radio.sendValue("station one", 0)
}
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
}
if (conected_true_or_falce == 1) {
    basic.showIcon(IconNames.Yes)
    record.setMicGain(record.AudioLevels.Low)
} else {
    music.play(music.stringPlayable("C - C - C - - - ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.No)
    basic.showString("cant find other microbit please put firmware packet 2 on second microbit")
    basic.pause(5000)
    basic.pause(5000)
    basic.showString("are you conecting through usb")
    basic.showString("if you are to click yes click A if you are not than click B")
}
