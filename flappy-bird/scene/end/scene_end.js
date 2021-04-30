class SceneEnd extends SceneFramework {
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            let s = Scene.new(game)
            game.replaceScene(s)
        })
        // bg
        let bg = ImageFramework.new(game, 'bg')
        this.addElement(bg)
        // gameover
        let o = ImageFramework.new(game, 'gameover')
        o.x = 50
        o.y = 200
        this.addElement(o)
        this.t = Label.new(game, "按 R 重新开始")
        this.addElement(this.t)
    }
}
