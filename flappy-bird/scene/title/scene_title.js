class SceneTitle extends SceneFramework {
    constructor(game) {
        super(game)
        game.registerAction('s', function() {
            let s = Scene.new(game)
            game.replaceScene(s)
        })

        this.bg = ImageFramework.new(game, 'bg')
        this.addElement(this.bg)

        this.m = ImageFramework.new(game, 'message')
        this.m.x = 50
        this.m.y = 100
        this.addElement(this.m)
        this.t = Label.new(game, "按 S 开始游戏，方向键跳跃")
        this.addElement(this.t)
    }
}
