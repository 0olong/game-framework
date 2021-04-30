class Scene extends SceneFramework {
    constructor(game) {
        super(game)
        // 背景
        let bg = ImageFramework.new(game, 'bg')
        this.addElement(bg)
        // 加入管子
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)
        // 移动地面
        this.grounds = []
        for (let i = 0; i < 30; i++) {
            let g = ImageFramework.new(game, 'ground')
            g.x = i * 19
            g.y = 450
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 5
        // bird
        let b = Animation.new(game)
        b.x = 100
        b.y = 150
        this.bird = b
        this.addElement(b)

        this.setupInputs()
    }

    update() {
        super.update()
        // 地面移动
        this.skipCount--
        let offset = -5
        if (this.skipCount === 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let i = 0; i < 30; i++) {
            let g = this.grounds[i]
            g.x += offset
        }
    }

    setupInputs() {
        let self = this
        let b = this.bird
        self.game.registerAction('ArrowUp', function(keyStatus) {
            b.jump()
        })
    }

    collide(pipe) {
        return rectIntersects(this, pipe) && rectIntersects(pipe, this)
    }
}
