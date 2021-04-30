class Scene extends SceneFramework {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        let game = this.game
        this.numberOfEnemies = 10
        this.playerBullets = []
        this.enemyBullets = []
        this.bg = ImageFramework.new(game, 'sky')
        this.cloud = Cloud.new(game, 'cloud')

        this.player = Player.new(game)
        this.player.x = 100
        this.player.y = 150

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        //
        this.addEnemies()
    }

    addEnemies() {
        let es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            let e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInputs() {
        let g = this.game
        let s = this
        g.registerAction('ArrowLeft', function() {
            s.player.moveLeft()
        })
        g.registerAction('ArrowRight', function() {
            s.player.moveRight()
        })
        g.registerAction('ArrowUp', function() {
            s.player.moveUp()
        })
        g.registerAction('ArrowDown', function() {
            s.player.moveDown()
        })
        g.registerAction(' ', function() {
            s.player.fire()
        })
    }

    update() {
        super.update()
        // this.cloud.y += 1
    }
}
