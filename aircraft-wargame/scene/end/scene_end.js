class SceneEnd extends SceneFramework {
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            let s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.context.font = '16px serif'
        this.game.context.fillText('游戏结束, 按 R 返回标题界面', 100, 290)
    }
}
