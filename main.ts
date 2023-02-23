radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        radio.sendNumber(input.temperature())
        basic.pause(5000)
        radio.sendNumber(input.lightLevel())
    }
})
radio.setGroup(99)
