namespace SpriteKind {
    export const Object = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("5,10,15,20,", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Tengo 3 billetes de 100 y quiero comprar una tele que cuesta 565 ¿Cuanto falta?", DialogLayout.Bottom)
})
scene.setBackgroundImage(assets.image`Level Wallpaper`)
game.showLongText("Tengo dientes en la cabeza pero no tengo boca ¿Sabes quien soy?", DialogLayout.Bottom)
