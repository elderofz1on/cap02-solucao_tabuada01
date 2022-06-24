input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.showNumber(num1)
    basic.pause(1000)
    basic.showString("x")
    basic.pause(1000)
    basic.showNumber(num2)
    basic.pause(1000)
    basic.showString("= ???")
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(num1 * num2)
})
let num2 = 0
let num1 = 0
basic.showString("<P  R>")
