@namespace
class SpriteKind:
    Object = SpriteKind.create()

def on_a_pressed():
    game.show_long_text("", DialogLayout.BOTTOM)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

scene.set_background_image(assets.image("""
    Level Wallpaper
"""))
game.show_long_text("Tengo dientes en la cabeza pero no tengo boca ¿Sabes quien soy?",
    DialogLayout.BOTTOM)