def on_received_number(receivedNumber):
    global conected_true_or_falce
    conected_true_or_falce = 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    serial.redirect_to_usb()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.set_group(1)
    radio.send_value("station one", 0)
    for index in range(10):
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.show_icon(IconNames.DIAMOND)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    radio.set_transmit_serial_number(True)
    input.calibrate_compass()
radio.on_received_value(on_received_value)

conected_true_or_falce = 0
basic.show_string("Hello! and welcome to your new alarm system")
radio.set_group(1)
radio.send_value("station one", 0)
for index2 in range(10):
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_icon(IconNames.DIAMOND)
if True:
    pass
else:
    music.play(music.string_playable("C - C - C - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.NO)
    basic.show_string("cant find other microbit please put firmware packet 2 on second microbit")
    basic.pause(5000)
    basic.pause(5000)
    basic.show_string("are you conecting through usb")
    basic.show_string("if you are to click yes click A if you are not than click B")