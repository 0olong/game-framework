class SceneTitle extends SceneFramework {
    constructor(game) {
        super(game)
        game.registerAction('k', function(){
            let s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        // draw labels
        this.game.context.font = '16px serif'
        this.game.context.fillText('按 K 开始游戏，按 F 发射，方向键移动', 20, 150)
        this.game.context.fillText('调试模式：鼠标点击添加砖块，球可拖动，按 P 暂停', 20, 170)
    }
}
