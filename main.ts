let mySprite = sprites.create(assets.image`orange`, SpriteKind.Player)
mySprite.setScale(3, ScaleAnchor.Middle)
animation.runImageAnimation(
mySprite,
assets.animation`brown`,
200,
true
)
