class SceneTitle extends SceneFramework {
    constructor(game) {
        super(game)
        let label = Label.new(game, '按 S 开始，方向键移动，空格键射击')
        this.addElement(label)

        game.registerAction('s', function() {
            let s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        super.draw()
    }
}
